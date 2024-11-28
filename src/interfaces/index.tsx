export interface Todo {
    id: string;
    title: string;
    description?: string;
    date: Date;
    completed?: boolean;
  }

export type RootStackParamList = {
    Home: undefined;
    AddTask: {addTask: (todo: Todo) => void};
    TaskDetail: { task: Todo, deleteTask: (taskId: string) => void  };
  };