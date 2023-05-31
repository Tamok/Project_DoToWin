/**
 * File: TasksScreen.js
 * Project: DoToWin
 * Description: This file contains the TasksScreen component which displays the list of tasks.
 */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, completeTask } from '../store/tasksSlice';
import { incrementPoints, levelUp, addBuilding } from '../store/gameSlice';

// New Task component
function Task({ task }) {
  const dispatch = useDispatch();

  const handleComplete = () => {
      dispatch(completeTask(task.id));
      // Additional actions as described above
  };

  return (
      <View>
          <Text>{task.name}</Text>
          <Button onPress={handleComplete} title="Complete" />
      </View>
  );
}

// In your TasksScreen component
{tasks.map(task => <Task key={task.id} task={task} />)}
