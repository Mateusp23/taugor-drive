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
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordLink: {
    color: theme.colors.purple_700,
    marginLeft: 5,
  },
  contentButton: {
    justifyContent: 'center',
  },
  containerSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginTop: 32,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.black,
  },
  orText: {
    marginHorizontal: 10,
    color: theme.colors.black,
  },
  contentLoginGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },
  registerAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 36,
    marginBottom: 10,
  },
  registerAccount: {
    color: theme.colors.purple_700,
    marginLeft: 5,
  }
});