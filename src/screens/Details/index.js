import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Header from '../../components/Header';
import Footer from '../../components/footer'; 

export default function Details({ route }) {
  const navigation = useNavigation();
  const { title, date, url, explanation } = route.params; 

  return (
    <View style={styles.container}>
      <Header>
        {}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </Header>

      {}
      <View style={styles.detailsContainer}>
        <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.explanation}>{explanation}</Text>
      </View>

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
  backButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#4169E1',
    marginLeft: 30,
    marginHorizontal:-20
  },
  backButtonPressed: {
    backgroundColor: '#dd1717',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  date: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 20,
  },
  explanation: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});