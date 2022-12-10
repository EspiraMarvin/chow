import { FlatList } from "react-native"
import { useSelector } from "react-redux"

import CategoryGridTile from "../components/CategoryGridTile"
import Gradient from "../components/ui/Gradient"

export default function CategoriesScreen({ navigation }) {
  const CATEGORIES = useSelector((state) => state.mealsData.categories)

  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      })
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    )
  }

  return (
    <Gradient>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </Gradient>
  )
}
