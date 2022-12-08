import { CATEGORIES } from "../data/dummy-data"
import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      /*console.log(
            `${itemData.item.title} ${itemData.item.id} ${itemData.item.color} pressed`
          )*/
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
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}
