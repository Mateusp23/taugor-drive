import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import { useImageContext } from '@/context/ImageContext';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '@/services/firebaseConfig';
import { Button } from '../Button';

export function FileUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | undefined | null>(null);
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
      const uploadUrl = await uploadImageAsync(result.assets[0].uri)
      setImage(uploadUrl);
    }
  };

  const uploadImageAsync = async (uri: string) => {
    setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpload = async () => {
    // if (!image) {
    //   Alert.alert('Erro', 'Selecione uma imagem para enviar');
    //   return;
    // }

    // setIsLoading(true);
    // try {
    //   setIsLoading(false);
    // } catch (error) {
    //   console.error('Erro ao fazer upload:', error);
    //   Alert.alert('Erro', 'Ocorreu um erro ao fazer upload do arquivo');
    //   setIsLoading(false);
    // }
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