import { View, StyleSheet, FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <>
        <CategoryGridTitle
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
