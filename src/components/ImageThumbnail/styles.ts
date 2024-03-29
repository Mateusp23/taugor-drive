import { theme } from './../../theme/index';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    padding: 8,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.lg,
    marginRight: 12,
  },
  content: {
    flexDirection: 'column',
    gap: 4,
  },
  name: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.medium,
  },
  textDetails: {
    fontSize: theme.fonts.size.body.xs,
    fontFamily: theme.fonts.family.regular,
  }
});
