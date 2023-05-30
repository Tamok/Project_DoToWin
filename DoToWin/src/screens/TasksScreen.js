import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import { completeTask } from '../store/tasksSlice';

export function TasksScreen() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    // For simplicity, we'll just add a dummy task. You would replace this with your task creation logic.
    dispatch(addTask({ id: Math.random().toString(), name: 'New Task' }));
  };

  const handleCompleteTask = id => {
    dispatch(completeTask(id));
    dispatch(incrementPoints(1));
    dispatch(levelUp());
    dispatch(addBuilding());
  };

  return (
    <View>
      <Text>Tasks Screen</Text>
      {tasks.map(task => <Text key={task.id}>{task.name}</Text>)}
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Complete" onPress={() => handleCompleteTask(task.id)} />
    </View>
  );
}
