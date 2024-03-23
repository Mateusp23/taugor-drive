import { Button } from "@/components/Button";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export default function Splash() {
  function handleClickSignIn() {
    // router.navigate("/login/")
  }

  function handleClickRegister() {
    // router.navigate("/register/")
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