import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { theme } from "@/theme";

const GoogleIcon = () => {
  return (
    <Ionicons name="logo-google" size={24} color={theme.colors.purple_700} />
  );
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputEmail = (value: string) => {
    setEmail(value);
  };

  function handleInputPassword(value: string) {
    setPassword(value)
  }

  function handleLogin() {
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user)
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     console.log(errorMessage);
    //   });
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
          onChangeText={handleInputEmail}
        />
        <Input
          placeholder="Password"
          value={password}
          type="password"
          onChangeText={handleInputPassword}
        />
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text>Esqueceu sua senha?</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.forgotPasswordLink}>Clique aqui</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentButton}>
        {/* <Button title="Sign In" onPress={() => router.back()} /> */}
        {/* <Button title="Sign In" onPress={handleLogin} /> */}

        <View style={styles.containerSeparator}>
          <View style={styles.separator} />
          <Text style={styles.orText}>ou</Text>
          <View style={styles.separator} />
        </View>
      </View>

      <View style={styles.contentLoginGoogle}>
        <TouchableOpacity onPress={() => { }}>
          <GoogleIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.registerAccountContainer}>
        <Text>Ainda não possui conta?</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.registerAccount}>Cadastrar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}