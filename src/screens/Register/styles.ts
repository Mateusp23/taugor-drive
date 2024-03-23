import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 64,
    fontFamily: theme.fonts.family.bold,
  },
  subtitle: {
    fontSize: theme.fonts.size.heading.lg,
    marginTop: 8,
    fontFamily: theme.fonts.family.regular,
  },
  content: {
    marginTop: 24,
  },
  contentButton: {
    justifyContent: 'center',
  },
  loginAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 36,
    marginBottom: 10,
  },
  loginAccount: {
    color: theme.colors.purple_700,
    marginLeft: 5,
  }
});