import { TaskList } from "@/interfaces/task";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_KEY = "@tasks";

export const saveTasks = async (tasks: TaskList): Promise<void> => {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.log("Erro ao salvar task: ", error);
  }
};

export const loadTasks = async (): Promise<TaskList> => {
  try {
    const savedTasks = await AsyncStorage.getItem(TASKS_KEY);
    return savedTasks ? (JSON.parse(savedTasks) as TaskList) : [];
  } catch (error) {
    console.log("Erro ao carregar tasks: ", error);
    return [];
  }
};
