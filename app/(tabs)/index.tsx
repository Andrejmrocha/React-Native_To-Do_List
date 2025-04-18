import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import tasks from "../../data/tasks.json";
import { Task } from "@/interfaces/task";
import TaskComponent from "@/components/TaskComponent";
import Input from "@/components/ui/input";
import { Button } from "@rneui/themed";
import { ITEM_WIDTH } from "@/constants/Dimension";

export default function TabOneScreen() {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskComponent
            id={item.id}
            title={item.title}
            isCompleted={item.isCompleted}
          ></TaskComponent>
        )}
      />
      <Input placeholder="Nova tarefa" name="new-task" />
      <Button
        title="Cria nova tarefa"
        containerStyle={{ width: ITEM_WIDTH, borderRadius: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  task: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
});
