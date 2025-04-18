import { useMemo, useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  View,
} from "react-native";
import tasks from "../../data/tasks.json";
import { Task } from "@/interfaces/task";
import TaskComponent from "@/components/TaskComponent";
import Input from "@/components/ui/input";
import { ITEM_WIDTH } from "@/constants/Dimension";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function App() {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const insets = useSafeAreaInsets();
  const sortedTasks = useMemo(() => {
    return [...taskList].sort(
      (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
    );
  }, [taskList]);

  const toogleTask = (id: string) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  return (
    <View
      style={{
        width: "100%",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <View style={styles.inputContainer}>
        <Input placeholder="Nova tarefa" name="new-task" />
        <Button title="Cancelar" onPress={() => Keyboard.dismiss()} />
      </View>
      <FlatList
        data={sortedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskComponent
            id={item.id}
            title={item.title}
            isCompleted={item.isCompleted}
            onToggle={toogleTask}
          ></TaskComponent>
        )}
        style={{ width: "100%" }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
  },
});
