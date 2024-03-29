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

  function handleLogout() {
    Alert.alert(
      'Confirmar logout',
      'Tem certeza de que deseja fazer logout?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Logout cancelado'),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            auth.signOut()
              .then(() => {
                clearUser();
                navigation.navigate('login');
              })
              .catch((error) => {
                console.error('Erro ao fazer logout:', error);
              });
          },
        },
      ],
      { cancelable: false }
    );
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