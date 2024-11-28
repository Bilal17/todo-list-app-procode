import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from './styles';
import { RootStackParamList } from '../../interfaces';


type TaskDetailScreenProps = StackScreenProps<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen: React.FC<TaskDetailScreenProps> = ({ route, navigation }) => {
  const { task,deleteTask } = route.params;

  const handleDelete = () => {
    deleteTask(task.id)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskDetails}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.taskDate}>
          Due Date: {task.date.toLocaleDateString()}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={handleDelete}
          >
            <Text style={styles.deleteButtonText}>Delete Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TaskDetailScreen;