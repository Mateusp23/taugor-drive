import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    marginTop: 48,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    lineHeight: 44,
    fontFamily: theme.fonts.family.bold,
  },
  subtitle: {
    fontSize: theme.fonts.size.body.md,
    marginTop: 12,
    marginBottom: 22,
    fontFamily: theme.fonts.family.regular,
  }
});