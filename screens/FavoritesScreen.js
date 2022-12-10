import { Text, StyleSheet, View, Button } from "react-native"
import Gradient from "../components/ui/Gradient"
import { useSelector } from "react-redux"

import MealsList from "../components/mealsList/MealsList"

export default function CategoriesScreen({ navigation }) {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
  const MEALS = useSelector((state) => state.mealsData.meals)

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  )

  function goToList() {
    navigation.navigate("Categories")
  }

  return (
    <Gradient>
      {favoriteMeals.length == 0 ? (
        <View style={styles.noFavContainer}>
          <Text style={styles.noFavText}>You have no favorite meals yet.</Text>
          <Button title="Go to the meals list" onPress={goToList} />
        </View>
      ) : (
        <MealsList meals={favoriteMeals} />
      )}
    </Gradient>
  )
}

const styles = StyleSheet.create({
  noFavContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavText: {
    fontSize: 20,
    marginBottom: 10,
  },
})
