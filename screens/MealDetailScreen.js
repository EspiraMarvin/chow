import { useLayoutEffect, useState } from "react"
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageBackground,
} from "react-native"
import Shadow from "../components/ui/Shadow"
import { MEALS } from "../data/dummy-data"
import Gradient from "../components/ui/Gradient"

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId
  const [ti, setTi] = useState("")
  const [details, setDetails] = useState({})

  const mealDetails = MEALS.find((meal) => meal.id === mealId)

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title
    navigation.setOptions({
      title: mealTitle,
      animation: "slide_from_right",
    })
    setTi(mealTitle)
  }, [mealId, navigation])

  //   console.log("mealDetails", mealDetails.imageUrl)

  return (
    <Gradient>
      <Shadow>
        <Image
          resizeMode="contain"
          style={{ height: 300, width: "100%" }}
          source={{ uri: mealDetails.imageUrl }}
        />
        <View style={styles.container}>
          <Text>{ti}</Text>
          <Text>{mealDetails.affordability}</Text>
          <Text>{mealDetails.categoryIds}</Text>
          <Text>{mealDetails.duration}</Text>
          <Text>
            isGlutenFree {mealDetails.isGlutenFree ? "true" : "false"}
          </Text>
          <Text>isVegan {mealDetails.isVegan ? "true" : "false"}</Text>
          <Text>isVegetarian{mealDetails.isVegetarian ? "true" : "false"}</Text>
          <Text>
            isLactoseFree{mealDetails.isLactoseFree ? "true" : "false"}
          </Text>
        </View>
      </Shadow>
    </Gradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
