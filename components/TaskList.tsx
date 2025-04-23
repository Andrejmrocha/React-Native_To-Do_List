import { useTasks } from "@/utils/TaskContext";
import TaskComponent from "./TaskComponent";
import { FlatList } from "react-native";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskComponent {...item} />}
      style={{ width: "95%", padding: 10 }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
    />
  );
}
