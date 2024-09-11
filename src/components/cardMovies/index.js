import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardAPOD({ titulo, data, imagem }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerNasa}
      onPress={() => navigation.navigate('Details', { imagem: imagem, titulo: titulo, data: data })}
    >
      <View style={styles.titleContainer}>
        <Image style={styles.images} source={{ uri: imagem }} />
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.textData}>{data}</Text>
      </View>
    </TouchableOpacity>
  );
}