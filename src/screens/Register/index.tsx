import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputName = (value: string) => {
    setName(value);
  };

  const handleInputBusinessName = (value: string) => {
    setBusinessName(value)
  }

  const handleInputPhone = (value: string) => {
    setPhone(value)
  }

  const handleInputEmail = (value: string) => {
    setEmail(value);
  };

  function handleInputPassword(value: string) {
    setPassword(value)
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
          onChangeText={handleInputName}
        />
        <Input
          placeholder="Business Name"
          value={businessName}
          type="text"
          onChangeText={handleInputBusinessName}
        />
        <Input
          placeholder="Phone"
          value={phone}
          type="phone"
          onChangeText={handleInputPhone}
        />
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

      <View style={styles.contentButton}>
        <Button title="Sign In" onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.loginAccountContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.loginAccount}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}