import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "@/screens/Login";
import Register from "@/screens/Register";
import { Loading } from "@/components/Loading";
import Home from "@/screens/Home";
import Upload from "@/screens/Upload";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="home" component={Home} />
      <Screen name="upload" component={Upload} />
      <Screen name="loading" component={Loading} />
    </Navigator>
  )
}