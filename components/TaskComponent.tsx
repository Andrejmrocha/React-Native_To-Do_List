import { Task } from "@/interfaces/task";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ITEM_WIDTH } from "@/constants/Dimension";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { useTasks } from "@/utils/TaskContext";

interface taskComponentProps extends Task {}

export default function TaskComponent({
  id,
  title,
  isCompleted,
}: taskComponentProps) {
  const { toggleTask } = useTasks();
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const textOpacity = useSharedValue(1);

  const AnimatedText = Animated.createAnimatedComponent(Text);
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  useEffect(() => {
    if (isCompleted) {
      scale.value = withSpring(1.2, { damping: 2 });
      opacity.value = withTiming(1, { duration: 600 });
    } else {
      scale.value = withTiming(1, { duration: 200 });
    }
  }, [isCompleted]);

  useEffect(() => {
    textOpacity.value = withTiming(isCompleted ? 0.6 : 1, { duration: 600 });
  }, [isCompleted]);

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));
  return (
    <View style={styles.task}>
      <AnimatedText
        style={[isCompleted && styles.completedTitle, textAnimatedStyle]}
      >
        {title}
      </AnimatedText>
      <Pressable onPress={() => toggleTask(id)}>
        <AnimatedIcon
          name={
            isCompleted
              ? "check-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          size={24}
          color={isCompleted ? "#4CAF50" : "#757575"}
          style={animatedStyle} // Aplica a animação
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginTop: 8,
    borderRadius: 8,
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: "#9e9e9e",
  },
});
