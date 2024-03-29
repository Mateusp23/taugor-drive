import { theme } from './../../theme/index';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: theme.borderRadius.sm,
    marginBottom: 12,
  },
  selectButton: {
    backgroundColor: theme.colors.black,
    padding: 10,
    width: "100%",
    borderRadius: theme.borderRadius.sm,
    marginBottom: 12
  },
  selectButtonText: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.medium,
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.purple_700,
    width: "100%",
    padding: 10,
    borderRadius: theme.borderRadius.sm,
    marginTop: 12,
    marginBottom: 12
  },
  clearButtonText: {
    color: theme.colors.purple_700,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.medium,
    textAlign: 'center'
  },
});