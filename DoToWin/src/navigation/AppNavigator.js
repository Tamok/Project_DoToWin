/**
 * File: AppNavigator.js
 * Project: DoToWin
 * Description: This file contains the navigation setup for the application.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameScreen } from '../screens/GameScreen';
import { Task as TasksScreen } from '../screens/TasksScreen'; // Note: Task is renamed to TasksScreen during import

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Game">
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;