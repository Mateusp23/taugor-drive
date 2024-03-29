import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { theme } from '@/theme';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
}

export function InputSearch({ placeholder = 'Search', onSearch }: SearchInputProps) {
  const [text, setText] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholderTextColor={theme.colors.white}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Feather name="search" size={24} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};