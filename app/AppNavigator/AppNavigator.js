import { StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import DishDetailScreen from '../screens/DishDetailScreen/DishDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Menu' component={MenuScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
