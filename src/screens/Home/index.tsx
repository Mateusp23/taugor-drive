import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Button } from "@/components/Button";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Button title="Sign In" onPress={() => navigation.goBack()} />
    </View>
  )
}