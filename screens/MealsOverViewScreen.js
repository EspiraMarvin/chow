import { useLayoutEffect } from "react"
import MealsList from "../components/mealsList/MealsList"
import Gradient from "../components/ui/Gradient"
import { useSelector } from "react-redux"

export default function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId
  const CATEGORIES = useSelector((state) => state.mealsData.categories)
  const MEALS = useSelector((state) => state.mealsData.meals)

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title

    // sets config options for MealsOverViewScreen navbar
    navigation.setOptions({
      title: categoryTitle,
      animation: "slide_from_right",
    })
  }, [catId, navigation])

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  )

  return (
    <Gradient>
      <MealsList meals={displayedMeals} />
    </Gradient>
  )
}
