import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';  
import Header from '../../components/Header';
import Footer from '../../components/footer'; 

export default function App() {
  const [apodData, setApodData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); 

  useEffect(() => {
    async function fetchApodImages() {
      const startDate = '2023-05-01';
      const endDate = '2023-05-20';
      const apiKey = 'VdctRN6PlqzrAY20gAi0yestK1lRcOrj7LUZPV7V';
      const url = `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setApodData(data);
      setFilteredData(data);
    }

    fetchApodImages();
  }, []);

  const filterImages = (text) => {
    setSearchQuery(text);
    const filtered = apodData.filter(image => image.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  };

  const handleCardPress = (item) => {
   
    navigation.navigate('Details', {
      title: item.title,
      date: item.date,
      url: item.url,
      explanation: item.explanation,
    });
  };

  return (
    <View style={styles.container}>
      <Header>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar..."
          value={searchQuery}
          onChangeText={filterImages}
        />
      </Header>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.date}
        numColumns={5}
        contentContainerStyle={styles.cardContainer}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.card}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
      <Footer /> {}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '80%',
    margin: 10,
  },
  cardContainer: {
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 100, 
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginVertical: 90, 
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
});