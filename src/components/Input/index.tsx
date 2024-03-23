import React, { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View, KeyboardTypeOptions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from '@/theme';

interface InputProps extends TextInputProps {
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'phone';
}

export function Input({ placeholder, type = 'text', ...rest }: InputProps) {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(type === 'password');
  let keyboardType: KeyboardTypeOptions = 'default';

  switch (type) {
    case 'email':
      keyboardType = 'email-address';
      break;
    case 'password':
      keyboardType = 'default';
      break;
    case 'phone':
      keyboardType = 'phone-pad';
      break;
    default:
      keyboardType = 'default';
      break;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.white}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoFocus
        {...rest}
      />
      {type === 'password' && (
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setSecureTextEntry((prev) => !prev)}
        >
          <Ionicons name={secureTextEntry ? 'eye' : 'eye-off'} size={24} color={theme.colors.white} />
        </TouchableOpacity>
      )}
    </View>
  )
}