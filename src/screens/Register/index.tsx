import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { auth, db } from "@/services/firebaseConfig";
import { displayErrorMessage } from "@/utils/validationErrorCodeFirebase";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface RegisterProps {
  name: string
  businessName: string
  email: string
  phone: string
  password: string
}

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateAccount() {
    if (!email || !password || !name || !businessName || !phone) {
      return Alert.alert("Criar", "Informe todos os campos");
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        businessName: businessName,
        phone: phone,
        email: email
      });

      Alert.alert("Conta", "Cadastrado com sucesso!");
      navigation.navigate('home');
    } catch (error: any) {
      console.log(error)
      displayErrorMessage('Criar', error.code);
    } finally {
      setIsLoading(false);
    }
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