// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from './styles';
import { TodoListItem } from '../../components/TodoListItem';
import { Todo,RootStackParamList } from '../../interfaces';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (todo: Todo) => {
    setTodos((prevList) => [...prevList, todo]);
  };

  const deleteTask = (taskId: string) => {
    setTodos((prevList) => prevList.filter((todo) => todo.id !== taskId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoListItem 
            item={item} 
            onPress={() => navigation.navigate('TaskDetail', { task: item, deleteTask })}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>You are all Done! Add new Tasks!</Text>
        }
      />
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTask', {addTask})}
      >
        <Text style={styles.addButtonText}>+ Add New Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;