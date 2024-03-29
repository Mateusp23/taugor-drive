import { Button } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';
import { useState } from 'react';
import { Input } from '@/components/Input';

export default function Upload() {
  const navigation = useNavigation();
  const [fileName, setFileName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="arrow-left" size={20} color={theme.colors.black} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Upload</Text>
      </View>
      <Text style={styles.subtitle}>Faça o upload de arquivos.</Text>
      <Input
        placeholder="Nome do arquivo"
        value={fileName}
        type="text"
        onChangeText={setFileName}
      />

      <View>
        <Button title="Enviar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}