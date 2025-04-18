import { ITEM_WIDTH } from "@/constants/Dimension";
import { StyleSheet, TextInput } from "react-native";

export interface inputProps {
  name: string;
  placeholder: string;
}

export default function Input(props: inputProps) {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      returnKeyType="send"
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    backgroundColor: "#fff",
  },
});
