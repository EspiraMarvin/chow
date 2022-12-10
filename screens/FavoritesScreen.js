import { useContext } from "react"
import { Text, StyleSheet, View, Button } from "react-native"
import Gradient from "../components/ui/Gradient"
import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy-data"

import MealsList from "../components/mealsList/MealsList"

export default function CategoriesScreen({ navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMealsIds = favoriteMealsCtx.ids

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  )

  //or
  /*
    const favoriteMealss = favoriteMealsIds.map((id) =>
    MEALS.find((meal) => meal.id === id)
  )
  */

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
