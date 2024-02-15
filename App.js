import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import CategoryManagerScreen from './Screens/CategoryManagerScreen';
import ExpensesReportScreen from './Screens/ExpensesReportScreen';
import { MainStackNavigator } from './Navigation/StackNavigator';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/*
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Categorias de Gastos" component={CategoryManagerScreen} />
          <Drawer.Screen name="Reportar Gastos" component={ExpensesReportScreen} />
        </Drawer.Navigator>
         */}
         <MainStackNavigator />
      </NavigationContainer>
    </>
  );
}