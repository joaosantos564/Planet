import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Create from "../screens/Create";
import MyPlanets from "../screens/MyPlanets";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Create" component={Create} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="MyPlanets" component={MyPlanets} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
