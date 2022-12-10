import { View, Text, StyleSheet } from "react-native"

export default function MealDetails({
  duration,
  affordability,
  complexity,
  style,
}) {
  return (
    <View style={[styles.detailsContainer, style]}>
      <Text style={styles.detailsText}>{duration} min</Text>
      <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
      <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
