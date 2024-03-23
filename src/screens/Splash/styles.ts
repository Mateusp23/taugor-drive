import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 48,
    marginBottom: 42,
    fontFamily: theme.fonts.family.bold,
  },
  image: {
    width: 332,
    height: 332,
  },
  containerButton: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    marginTop: 42
  },
  sigInBtn: {
    width: "50%",
    color: theme.colors.white,
    backgroundColor: theme.colors.black
  },
  registerBtn: {
    width: "50%",
  },
  content: {
    flex: 1,
  }
});