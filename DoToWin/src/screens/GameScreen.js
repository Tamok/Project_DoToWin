/**
 * File: GameScreen.js
 * Project: DoToWin
 * Description: This file contains the GameScreen component which displays the game screen.
 * The GameScreen component displays the current game stats including points, level, and buildings.
 * It also provides buttons to increment points, level up, and add buildings.
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { incrementPoints } from '../store/gameStatsSlice';
import { levelUp } from '../store/characterSlice';
import { addBuilding } from '../store/townSlice';

// The GameScreen component
export const GameScreen = () => {
  // Use selectors to get the current state of points, level, and buildings
  const points = useSelector(state => state.gameStats.points);
  const level = useSelector(state => state.character.level);
  const buildings = useSelector(state => state.town.buildings);
  
  // Use dispatch to dispatch actions
  const dispatch = useDispatch();

  // Handler for incrementing points
  const handleIncrementPoints = () => {
    dispatch(incrementPoints(1));
  };

  // Handler for leveling up
  const handleLevelUp = () => {
    dispatch(levelUp());
  };

  // Handler for adding buildings
  const handleAddBuilding = () => {
    dispatch(addBuilding());
  };

  // Render the game screen
  return (
    <View>
      <Text>Game Screen</Text>
      <Text>Points: {points}</Text>
      <Text>Level: {level}</Text>
      <Text>Buildings: {buildings}</Text>
      <Button title="Increment Points" onPress={handleIncrementPoints} />
      <Button title="Level Up" onPress={handleLevelUp} />
      <Button title="Add Building" onPress={handleAddBuilding} />
    </View>
  );
}
