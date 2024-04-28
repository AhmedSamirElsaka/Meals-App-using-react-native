import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function MealItem({
  children,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{children}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detialsItem}>{duration}m</Text>
            <Text style={styles.detialsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detialsItem}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  detailsContainer: {
    padding: 8,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  detialsItem: {
    fontSize: 12,
  },
});
