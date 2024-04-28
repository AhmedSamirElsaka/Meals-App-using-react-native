import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, View, StyleSheet } from "react-native";

function IconButtonItem({ onPress, color, name }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <Ionicons name={name} color={color} size={24} />
    </Pressable>
  );
}
export default IconButtonItem;
const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75,
  },
});
