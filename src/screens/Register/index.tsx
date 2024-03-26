import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { auth } from "@/services/firebaseConfig";
import { displayErrorMessage } from "@/utils/validationErrorCodeFirebase";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleCreateAccount() {
    if (!email || !password || !name || !businessName || !phone) {
      return Alert.alert("Criar", "Informe todos os campos");
    }

    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        console.log(user)
        navigation.navigate('home');
      })
      .catch((error) => {
        console.log(error)
        displayErrorMessage('Criar', error.code);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets Register{"\n"}Account</Text>
      <Text style={styles.subtitle}>Hello user, you have{"\n"}a greatiful journey</Text>

      <View style={styles.content}>
        <Input
          placeholder="Name"
          value={name}
          type="text"
          onChangeText={setName}
        />
        <Input
          placeholder="Business Name"
          value={businessName}
          type="text"
          onChangeText={setBusinessName}
        />
        <Input
          placeholder="Phone"
          value={phone}
          type="phone"
          onChangeText={setPhone}
        />
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          value={password}
          type="password"
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.contentButton}>
        <Button title="Register" isLoading={isLoading} onPress={handleCreateAccount} />
      </View>

      <View style={styles.loginAccountContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginAccount}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}