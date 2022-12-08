import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import Shadow from "./ui/Shadow"

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  onPress,
}) {
  return (
    <Shadow>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => onPress(id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.mealImage} source={{ uri: imageUrl }} />
            <Text style={styles.mealTitle}>{title}</Text>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>{duration} min</Text>
            <Text style={styles.detailsText}>
              {affordability.toUpperCase()}
            </Text>
            <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </Shadow>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  mealImage: {
    height: 200,
    width: "100%",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailsText: {
    marginHorizontal: 15,
    fontSize: 13,
  },
  buttonPressed: {
    opacity: 0.6,
  },
})
