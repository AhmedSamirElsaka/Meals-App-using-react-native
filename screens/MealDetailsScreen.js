import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
// import IconButton from "../components/Iconbutton";
import IconButtonItem from "../components/IconButtonItem";

function MealDetailsScreen({ navigation }) {
  const routed = useRoute();
  const itemData = routed.params.itemDetails;

  function pressHeaderButtonHandler() {
    console.log("hello");
  }
  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.title === itemData.title).title;
    console.log(mealTitle);
    navigation.setOptions({ title: mealTitle });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButtonItem
            name="star"
            color="white"
            onPress={pressHeaderButtonHandler}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: itemData.imageUrl,
          }}
          style={styles.Image}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>{itemData.title}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detialsItem}>{itemData.duration} m</Text>
            <Text style={styles.detialsItem}>{itemData.complexity}</Text>
            <Text style={styles.detialsItem}>{itemData.affordability}</Text>
          </View>
          <View style={styles.detailssContainer}>
            <Text style={styles.ingredientsTitleText}>Ingredients</Text>
            <View>
              {itemData.ingredients.map((element) => {
                return <Text style={styles.ingredientItem}>{element}</Text>;
              })}
            </View>
          </View>
          <View style={styles.detailssContainer}>
            <Text style={styles.ingredientsTitleText}>Steps</Text>
            <View>
              {itemData.steps.map((element) => {
                return <Text style={styles.ingredientItem}>{element}</Text>;
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  Image: { height: 300, width: "100%" },
  innerContainer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleText: { color: "white", fontSize: 24, fontWeight: "bold" },
  ingredientsTitleText: {
    width: "100%",
    color: "yellow",
    fontWeight: "bold",
    fontSize: 24,
    borderBottomColor: "yellow",
    textAlign: "center",
    borderBottomWidth: 2,
  },
  detailsContainer: {
    width: "100%",
    padding: 8,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  detialsItem: {
    fontSize: 14,
    color: "white",
  },
  detailssContainer: {
    padding: 8,
    width: "100%",
    paddingHorizontal: 36,
    flex: 1,
  },
  ingredientItem: {
    backgroundColor: "goldenrod",
    borderRadius: 8,
    padding: 6,
    color: "black",
    marginTop: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
});
