import React from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components/Button';
import { useUser } from '@/context/UserContext';
import { InputSearch } from '@/components/InputSearch';
import { styles } from './styles';
import { theme } from '@/theme';
import { auth } from '@/services/firebaseConfig';
import { ImageThumbnail } from '@/components/ImageThumbnail';
import { Separator } from '@/components/Separator';

export default function Home() {
  const navigation = useNavigation();
  const { user, clearUser } = useUser();

  function performLogout() {
    auth.signOut()
      .then(() => {
        clearUser();
        navigation.navigate('login');
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error);
      });
  };

  function confirmLogout() {
    Alert.alert(
      'Confirmar logout',
      'Tem certeza de que deseja fazer logout?',
      [
        {
          text: 'Cancelar',
          onPress: () => { return },
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: performLogout,
        },
      ],
      { cancelable: false }
    );
  };

  function handleLogout() {
    confirmLogout();
  }

  const userImages = [
    { name: 'Mateus.jpg', url: 'https://github.com/Mateusp23.png' },
    { name: 'Mateus2.jpg', url: 'https://github.com/Mateusp23.png' },
    { name: 'Mateus2.jpg', url: 'https://github.com/Mateusp23.png' },
    { name: 'Mateus2.jpg', url: 'https://github.com/Mateusp23.png' },
    { name: 'Mateus2.jpg', url: 'https://github.com/Mateusp23.png' },
    { name: 'Mateus2.jpg', url: 'https://github.com/Mateusp23.png' },
    // Adicione mais imagens mocadas conforme necessário
  ];

  const RenderSeparator = () => {
    return <Separator />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Olá {user?.name}</Text>
        <Feather name="log-out" size={20} color={theme.colors.black} onPress={handleLogout} />
      </View>
      <Text style={styles.subtitle}>Seja bem vindo!! Faça upload de arquivos e pesquise-os.</Text>

      <View>
        <Button title="Upload" onPress={() => navigation.navigate('upload')} customStyle={styles.uploadBtn} />
        <InputSearch placeholder="Pesquisar ..." />
      </View>

      <FlatList
        data={userImages}
        ItemSeparatorComponent={RenderSeparator}
        renderItem={({ item }) => <ImageThumbnail image={item} />}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </View>
  );
}