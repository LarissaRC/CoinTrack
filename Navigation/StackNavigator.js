
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import MonthlyExpensesScreen from "../Screens/MonthlyExpensesScreen";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
            backgroundColor: "#F3D9FF",
            },
            headerTintColor: "#30024A",
            headerBackTitle: "Back",
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MonthlyExpenses" component={MonthlyExpensesScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };