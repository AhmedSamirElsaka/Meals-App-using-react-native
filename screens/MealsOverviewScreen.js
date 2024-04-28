import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
function MealsOverviewScreen({ route, navigation }) {
  //   const categoryId = route.params.categoryId;

  const routed = useRoute();
  const catId = routed.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealitem(itemData) {
    const item = itemData.item;

    function pressHandler() {
      navigation.navigate("MealDetails", {
        itemDetails: item,
      });
    }

    const mealItemProps = {
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
    };
    return (
      <View>
        <MealItem {...mealItemProps} onPress={pressHandler}>
          {item.title}
        </MealItem>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealitem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
