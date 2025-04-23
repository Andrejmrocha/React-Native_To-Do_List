import { ITEM_WIDTH } from "@/constants/Dimension";
import { useTasks } from "@/utils/TaskContext";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export interface inputProps {
  name: string;
  placeholder: string;
}

export default function Input(props: inputProps) {
  const [text, setText] = useState("");
  const { addTask } = useTasks();
  const handleSubmit = () => {
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      returnKeyType="send"
      value={text}
      onChangeText={setText}
      onSubmitEditing={handleSubmit}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
