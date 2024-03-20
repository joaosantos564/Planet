import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import PlaExisting from "../screens/PlaExisting";
import Create from "../screens/Create";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="PlaExisting" component={PlaExisting} />
      <Drawer.Screen name="Create" component={Create} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
