//rotas do app
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "@/screens/Login";
import Register from "@/screens/Register";
import { Loading } from "@/components/Loading";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="loading" component={Loading} />
    </Navigator>
  )
}