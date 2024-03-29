import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import { Input } from '../Input';

interface FileUploadProps {
  onFileChange: (file: string | null) => void
  fileName: string
  setFileName: (text: string) => void
}

export function FileUpload({ onFileChange, fileName, setFileName }: FileUploadProps) {
  const [file, setFile] = useState<string | null>(null)

  const handleFileSelect = async () => {
    const result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result)

    if (!result.canceled) {
      setFile(result.assets[0].uri);
      onFileChange(result.assets[0].uri);
    }
  };

  const clearFile = () => {
    setFileName('');
    setFile(null);
    onFileChange(null);
  };

  return (
    <View style={styles.container}>
      {file ? (
        <TouchableOpacity onPress={handleFileSelect}>
          <Image source={{ uri: file }} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <Input
          placeholder="Nome do arquivo"
          value={fileName}
          type="text"
          onChangeText={setFileName}
        />
      )}
      {file && (
        <TouchableOpacity style={styles.clearButton} onPress={clearFile}>
          <Text style={styles.clearButtonText}>Remover</Text>
        </TouchableOpacity>
      )}
      {!file && (
        <TouchableOpacity style={styles.selectButton} onPress={handleFileSelect}>
          <Text style={styles.selectButtonText}>Selecionar arquivo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
