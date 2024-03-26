import { Alert } from 'react-native';

interface ErrorMap {
  [key: string]: string;
}

const errorMessages: ErrorMap = {
  'auth/invalid-email': 'E-mail inválido.',
  'auth/email-already-in-use': 'E-mail informado já está em uso.',
  'auth/wrong-password': 'E-mail ou senha inválidos.',
  'auth/user-not-found': 'E-mail ou senha inválidos.',
};

export function displayErrorMessage(title: string, errorCode: string) {
  const errorMessage = errorMessages[errorCode] || 'Não foi possível acessar.';
  Alert.alert(title, errorMessage);
}