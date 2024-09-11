import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const Footer = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>NASA - National Aeronautics and Space Administration</Text>
      <Text style={styles.text}>Exploring the universe for the benefit of humankind.</Text>
      <View style={styles.socialLinks}>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com/NASA')}>
          <Icon name="facebook" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.instagram.com/nasa/')}>
          <Icon name="instagram" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.twitter.com/NASA')}>
          <Icon name="twitter" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.appLinks}>
        <TouchableOpacity onPress={() => openLink('https://apps.apple.com/us/app/nasa/id334903271')}>
          <Icon name="apple" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://play.google.com/store/apps/details?id=gov.nasa.android.app')}>
          <Icon name="android" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'white',
    width:'90%'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 5,
  },
  socialLinks: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  appLinks: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default Footer;