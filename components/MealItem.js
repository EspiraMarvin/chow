import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native"

export default function MealItem({ mealDetails }) {
  //   console.log(mealDetails.affordability)
  return (
    <View style={styles.container}>
      <Pressable style={styles.container}>
        <View>
          <Image
            style={styles.mealImage}
            source={{ uri: mealDetails.imageUrl }}
          />
        </View>
        <Text style={styles.mealTitle}>{mealDetails.title}</Text>
      </Pressable>

      <Text>{mealDetails.affordability}</Text>
      <Text>{mealDetails.duration} min</Text>

      {/* <FlatList
        data={mealDetails.ingredients}
        keyExtractor={(item, index) => item}
        renderItem={(itemData) => (
          <Text key={itemData.item}>{itemData.item}</Text>
        )}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mealTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  mealImage: {
    // flex: 1,
    height: 200,
    width: 300,
    borderRadius: 12,
    marginVertical: 20,
  },
})
