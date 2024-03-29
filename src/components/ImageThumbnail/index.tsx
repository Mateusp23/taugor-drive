import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

interface ImageThumbnailProps {
  image: {
    name: string
    url: string
  }
}

export function ImageThumbnail({ image }: ImageThumbnailProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{image.name}</Text>
        <Text style={styles.textDetails}>Ver detalhes</Text>
      </View>
    </View>
  );
};
