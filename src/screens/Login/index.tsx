import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { theme } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import { auth } from "@/services/firebaseConfig";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { displayErrorMessage } from "@/utils/validationErrorCodeFirebase";

const GoogleIcon = () => {
  return (
    <Ionicons name="logo-google" size={24} color={theme.colors.purple_700} />
  );
};

export default function Login() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleEmailLogin() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe e-mail e senha");
    }

    setIsLoading(true);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user);

      navigation.navigate('home');
    } catch (error: any) {
      console.error(error);
      displayErrorMessage('Entrar', error.code);
    } finally {
      setIsLoading(false);
    }
  }

  function handleForgotPassword() {
    if (!email) {
      return Alert.alert("Recuperar senha", "Informe um e-mail");
    }

    sendPasswordResetEmail(auth, email)
      .then(() =>
        Alert.alert("Redefinir senha", "Enviamos um e-mail para você")
      )
      .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets Sign you in</Text>
      <Text style={styles.subtitle}>Welcome Back,{"\n"}You have been missed</Text>

      <View style={styles.content}>
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

      <View style={styles.forgotPasswordContainer}>
        <Text>Esqueceu sua senha?</Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordLink}>Clique aqui</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentButton}>
        <Button title="Sign In" isLoading={isLoading} onPress={handleEmailLogin} />
        {/* <Button title="Sign In" onPress={handleLogin} /> */}

        <View style={styles.containerSeparator}>
          <View style={styles.separator} />
          <Text style={styles.orText}>ou</Text>
          <View style={styles.separator} />
        </View>
      </View>

      <View style={styles.contentLoginGoogle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GoogleIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.registerAccountContainer}>
        <Text>Ainda não possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.registerAccount}>Cadastrar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}