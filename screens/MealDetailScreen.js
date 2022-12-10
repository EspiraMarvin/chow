import { useLayoutEffect, useContext } from "react"
import { Text, StyleSheet, View, Image, ScrollView } from "react-native"
import Shadow from "../components/ui/Shadow"
import { MEALS } from "../data/dummy-data"
import Gradient from "../components/ui/Gradient"
import MealDetails from "../components/mealDetail/MealDetails"
import SubTitle from "../components/mealDetail/SubTitle"
import List from "../components/mealDetail/List"
import IconButton from "../components/ui/IconButton"
import { FavoritesContext } from "../store/context/favorites-context"

export default function MealDetailsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext)

  const mealId = route.params.mealId

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  function changeFavoriteStatus() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorites(mealId)
    } else {
      favoriteMealsCtx.addFavorites(mealId)
    }
  }

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title
    navigation.setOptions({
      title: `About ${mealTitle}`,
      animation: "slide_from_right",
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatus}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={mealIsFavorite ? "yellow" : "white"}
          />
        )
      },
    })
  }, [mealId, navigation, changeFavoriteStatus])

  return (
    <ScrollView>
      <Gradient>
        <Shadow>
          <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
          <View style={styles.container}>
            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetails
              duration={selectedMeal.duration}
              affordability={selectedMeal.affordability}
              complexity={selectedMeal.complexity}
              style={[{ backgroundColor: "#ccc" }, { marginHorizontal: 24 }]}
            />

            <SubTitle>Ingredients</SubTitle>
            <List data={selectedMeal.ingredients} />
            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps} />
          </View>
        </Shadow>
      </Gradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 12,
  },
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
})
