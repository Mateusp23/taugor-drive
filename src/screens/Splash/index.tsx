import { Button } from "@/components/Button";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  function handleClickSignIn() {
    navigation.navigate('login');
  }

  function handleClickRegister() {
    navigation.navigate('register');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taugor Drive</Text>

      <Image source={require('@/assets/team-colaborator.png')} style={styles.image} />

      <View style={styles.containerButton}>
        <Button title="Entrar" onPress={handleClickSignIn} customStyle={styles.sigInBtn} />
        <Button title="Cadastrar" onPress={handleClickRegister} customStyle={styles.registerBtn} />
      </View>
    </View>
  )
}