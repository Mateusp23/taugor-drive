import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import { useImageContext } from '@/context/ImageContext';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '@/services/firebaseConfig';
import { Button } from '../Button';
import { useNavigation } from '@react-navigation/native';

export function FileUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [image, setImage] = useState<string | undefined | null>(null);
  const [imageUpload, setImageUpload] = useState<string>('');
  const { setImageUri } = useImageContext(); // Obtém a função do contexto global

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        'Permissão necessária',
        'É preciso que você permita o acesso às suas imagens!'
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uploadUrl = result.assets[0].uri
      setImageUpload(uploadUrl)
      setImage(uploadUrl);
    }
  };

  const uploadImageAsync = async (uri: string) => {
    const blob: any = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = ref(storage, `images/image-${Date.now()}`)
      const result = await uploadBytes(storageRef, blob)

      blob.close()
      return await getDownloadURL(storageRef)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpload = async () => {
    if (!imageUpload) {
      return console.log("image empty")
    }
    setIsLoading(true)
    try {
      await uploadImageAsync(imageUpload)
      navigation.navigate('home')
    } catch (error: any) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  };

  const handleRemoveImage = () => {
    setImage(null)
    setImageUri('')
  }

  return (
    <View style={styles.container}>
      {image && (
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableOpacity>
      )}
      {!image && (
        <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
          <Text style={styles.selectButtonText}>Selecionar arquivo</Text>
        </TouchableOpacity>
      )}

      {image && (
        <TouchableOpacity style={styles.clearButton} onPress={handleRemoveImage}>
          <Text style={styles.clearButtonText}>Remover</Text>
        </TouchableOpacity>
      )}

      <Button title="Enviar" onPress={handleUpload} isLoading={isLoading} />
    </View>
  );
}