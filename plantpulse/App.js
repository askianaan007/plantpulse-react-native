import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import ResetPass from "./screens/auth/ResetPassword";
import { AuthProvider } from "./context/authContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Plants from "./screens/plant/Plants"
import AddPlant from "./screens/plant/AddPlant";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPass"
            component={ResetPass}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Plants"
            component={Plants}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddPlant"
            component={AddPlant}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
