import { Button } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';
import { useState } from 'react';
import { FileUpload } from '@/components/FileUpload';

export default function Upload() {
  const navigation = useNavigation();
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (uri: string | null) => {
    setFileUri(uri); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={20} color={theme.colors.black} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Upload</Text>
      </View>
      <Text style={styles.subtitle}>Faça o upload de arquivos.</Text>

      <FileUpload onFileChange={handleFileChange} fileName={fileName} setFileName={setFileName} />
      
      <View>
        <Button title="Enviar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}