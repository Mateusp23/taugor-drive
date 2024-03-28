import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Button } from "@/components/Button";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const navigation = useNavigation();
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a) { user?.name }</Text>

      <Button title="Sign In" onPress={() => navigation.goBack()} />
    </View>
  )
}