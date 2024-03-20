import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import PlaExisting from "../screens/PlaExisting";
import StackRoutes from "./stack.routes";
import { planet } from "../data/MyPlanets";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
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
      <Tab.Screen
        name="PlaExisting"
        component={PlaExisting}
        initialParams={{ data: planet }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="square"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Planetas",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
      <Tab.Screen
        name="Criador"
        component={StackRoutes}
        options={{
          tabBarLabel: "Criador",
          tabBarLabelStyle: { color: "red" },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="globe"
              color={focused ? "#06f" : "#d6d6d6"}
              size={20}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarLabel: "Create",
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
