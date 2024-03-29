import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components/Button';
import { useUser } from '@/context/UserContext';
import { InputSearch } from '@/components/InputSearch';
import { styles } from './styles';
import { theme } from '@/theme';
import { auth } from '@/services/firebaseConfig';

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Olá {user?.name}</Text>
        <Feather name="log-out" size={20} color={theme.colors.black} onPress={handleLogout} />
      </View>
      <Text style={styles.subtitle}>Seja bem vindo!! Faça upload de arquivos e pesquise-os.</Text>

      <View>
        <InputSearch placeholder="Pesquisar ..." />
        <Button title="Sign In" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}