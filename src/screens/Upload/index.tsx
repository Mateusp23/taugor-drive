import { Button } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';
import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';
import { Input } from '@/components/Input';
import { useImageContext } from '@/context/ImageContext';
import { useUser } from '@/context/UserContext';

export default function Upload() {
  const navigation = useNavigation();
  //const [fileName, setFileName] = useState('');
  const { imageUri } = useImageContext();
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={20} color={theme.colors.black} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Upload</Text>
      </View>
      <Text style={styles.subtitle}>Faça o upload de arquivos.</Text>
      {/* <Input
        placeholder="Nome do arquivo"
        value={fileName}
        type="text"
        onChangeText={setFileName}
      /> */}

      <FileUpload />
    </View>
  );
}