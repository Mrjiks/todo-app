import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import TodoList from "./Screens/TodoList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsMenu from "./Screens/SettingsMenu";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#005A9C" },
          }}>
          <Stack.Screen
            name='Home'
            component={TodoList}
            options={{
              title: "TODO PAGE",
            }}
          />
          <Stack.Screen
            name='Settings'
            component={SettingsMenu}
            options={{
              title: "Notification Settings",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
