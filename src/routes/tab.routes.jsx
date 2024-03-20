import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import MyPlanets from "../screens/MyPlanets";
import StackRoutes from "./stack.routes";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              color={focused ? "#06f" : "#d6d6d6"}
              size={20}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="MyPlanets"
        component={MyPlanets}
        options={{
          tabBarLabel: "MyPlanetss",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="grid"
              color={focused ? "#06f" : "#d6d6d6"}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              color={focused ? "#06f" : "#d6d6d6"}
              size={20}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabRoutes;
