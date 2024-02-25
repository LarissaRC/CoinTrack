
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import MonthlyExpensesScreen from "../Screens/MonthlyExpensesScreen";
import ExpensesReportScreen from "../Screens/ExpensesReportScreen";
import CategoryManagerScreen from "../Screens/CategoryManagerScreen";
import AddExpenseScreen from "../Screens/AddExpenseScreen";
import NewCategoryScreen from "../Screens/NewCategoryScreen";
import ReportChartScreen from "../Screens/ReportChartScreen";


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
      <Stack.Screen name="ExpensesReportScreen" component={ExpensesReportScreen} />
      <Stack.Screen name="CategoryManagerScreen" component={CategoryManagerScreen} />
      <Stack.Screen name="AddExpenseScreen" component={AddExpenseScreen} />
      <Stack.Screen name="NewCategoryScreen" component={NewCategoryScreen} />
      <Stack.Screen name="ReportChartScreen" component={ReportChartScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };