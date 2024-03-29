import { theme } from "@/theme"
import React from "react"
import { Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps, StyleProp, ViewStyle } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
  customStyle?: StyleProp<ViewStyle>
}

export function Button({ title, isLoading = false, customStyle, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, customStyle]} disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={[styles.text]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}