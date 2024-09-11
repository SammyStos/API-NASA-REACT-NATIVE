import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Header = ({ children, onMenuPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.navRight}>
        {children} 
      </View>
      <View style={styles.navCenter}>
        <Image 
          source={{ uri: 'https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg' }} 
          style={styles.logo} 
        />
      </View>
      <View style={styles.navLeft}>
        <TouchableOpacity onPress={onMenuPress}>
          <Icon name="menu" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'black',
  
    paddingBottom: 5,
    width: '100%',
  },
  navLeft: {
    flex: 1,
marginLeft:100,



  },
  navCenter: {
    flex: 2,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:100
  
  },
  logo: {
    width: 75,
    height: 75,

  },
  navRight: {
    flex: 1,
    alignItems:"flex-end",
 justifyContent:"center",
 
  },
});

export default Header;