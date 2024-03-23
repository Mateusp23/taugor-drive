import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 42,
    width: 345,
    borderColor: theme.colors.purple_100,
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});