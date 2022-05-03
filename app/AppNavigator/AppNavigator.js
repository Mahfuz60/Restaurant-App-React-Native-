import { StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import DishDetailScreen from '../screens/DishDetailScreen/DishDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Services' component={MenuScreen} />
      <Stack.Screen name='Dish Details' component={DishDetailScreen} />
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Menu' component={MenuStack} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
