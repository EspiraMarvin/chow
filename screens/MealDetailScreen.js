import { useLayoutEffect } from "react"
import { Text, StyleSheet, View, Image, ScrollView } from "react-native"
import Shadow from "../components/ui/Shadow"
import { MEALS } from "../data/dummy-data"
import Gradient from "../components/ui/Gradient"
import MealDetails from "../components/meals/MealDetails"
import SubTitle from "../components/mealDetail/SubTitle"
import List from "../components/mealDetail/List"
import IconButton from "../components/ui/IconButton"

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  function headerBtnHandler() {
    // console.log("hahahhah")
  }

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title
    navigation.setOptions({
      title: `About ${mealTitle}`,
      animation: "slide_from_right",
      headerRight: () => {
        return (
          <IconButton onPress={headerBtnHandler} icon="star" color="white" />
        )
      },
    })
  }, [mealId, navigation, headerBtnHandler])

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
