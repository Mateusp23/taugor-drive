import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps, StyleProp, ViewStyle } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  customStyle?: StyleProp<ViewStyle>
}

export function Button({ title, customStyle, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, customStyle]} {...rest}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  )
}