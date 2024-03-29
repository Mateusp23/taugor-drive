import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    lineHeight: 44,
    marginTop: 64,
    fontFamily: theme.fonts.family.bold,
  },
  subtitle: {
    fontSize: theme.fonts.size.body.md,
    marginTop: 4,
    marginBottom: 22,
    fontFamily: theme.fonts.family.regular,
  }
});