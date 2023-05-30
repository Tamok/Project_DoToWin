// GameScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { incrementPoints } from '../store/gameStatsSlice';
import { levelUp } from '../store/characterSlice';
import { addBuilding } from '../store/townSlice';

export function GameScreen() {
  const points = useSelector(state => state.gameStats.points);
  const level = useSelector(state => state.character.level);
  const buildings = useSelector(state => state.town.buildings);
  const dispatch = useDispatch();

  const handleIncrementPoints = () => {
    dispatch(incrementPoints(1));
  };

  const handleLevelUp = () => {
    dispatch(levelUp());
  };

  const handleAddBuilding = () => {
    dispatch(addBuilding());
  };

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
