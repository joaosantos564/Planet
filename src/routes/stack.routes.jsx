import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import MyPlanets from "../screens/MyPlanets";
import Profile from "../screens/Profile";
import Teste from "../screens/Teste";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="MyPlanets" component={MyPlanets} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="Teste" component={Teste} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
