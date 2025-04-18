import { Task } from "@/interfaces/task";
import { StyleSheet, Text, View } from "react-native";
import { ITEM_WIDTH } from "@/constants/Dimension";

export default function TaskComponent(props: Task) {
  return (
    <View style={styles.task}>
      <Text>{props.title}</Text>
      <Text>{props.isCompleted ? "✅" : "⏳"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    width: ITEM_WIDTH,
    flex: 1,
    flexDirection: "row",
    padding: 8,
    backgroundColor: "white",
  },
});
