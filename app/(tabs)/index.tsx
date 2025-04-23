import { Button, Keyboard, StyleSheet, View } from "react-native";
import Input from "@/components/ui/input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TaskProvider } from "@/utils/TaskContext";

import TaskList from "@/components/TaskList";

export default function App() {
  const insets = useSafeAreaInsets();

  return (
    <TaskProvider>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.inputContainer}>
          <Input placeholder="Nova tarefa" name="new-task" />
          <Button title="Cancelar" onPress={() => Keyboard.dismiss()} />
        </View>
        <TaskList />
      </View>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
