import { Task } from "@/interfaces/task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { loadTasks, saveTasks } from "./todoStorage";

type TaskContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const loadedTasks = await loadTasks();
      setTasks(loadedTasks);
    };

    loadData();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        isCompleted: false,
      },
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks deve ser usado dentro de um TaskProvider");
  }
  return context;
}
