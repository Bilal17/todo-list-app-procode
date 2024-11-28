// src/components/TodoListItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { Todo } from '../interfaces';

interface TodoListItemProps {
  item: Todo;
  onPress: () => void;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ item, onPress }) => (
  <TouchableOpacity 
    style={styles.todoItem}
    onPress={onPress}
  >
    <View>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text style={styles.todoDate}>
        {item.date.toLocaleDateString()}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      todoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      todoDate: {
        color: '#888',
        marginTop: 5,
      },
})