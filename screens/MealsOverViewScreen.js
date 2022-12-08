import { MEALS } from "../data/dummy-data"
// import { useRoute } from "@react-navigation/native"

import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "../components/MealItem"

export default function MealsOverViewScreen({ route }) {
  //   const route = useRoute()
  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  )

  function renderMealItem(itemData) {
    return <MealItem mealDetails={itemData.item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
