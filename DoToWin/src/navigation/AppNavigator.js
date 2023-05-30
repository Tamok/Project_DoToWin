import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TasksScreen } from '../screens/TasksScreen';
import { GameScreen } from '../screens/GameScreen';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Tasks">
        {/* Our screens will go here */}
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
  );
}