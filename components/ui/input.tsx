import { ITEM_WIDTH } from "@/constants/Dimension";
import { StyleSheet, TextInput } from "react-native";

export interface inputProps {
  name: string;
  placeholder: string;
}

export default function Input(props: inputProps) {
  return (
    <TextInput placeholder={props.placeholder} style={styles.input}></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    width: ITEM_WIDTH,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
