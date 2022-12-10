import { View, Pressable, Text, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Shadow from "./ui/Shadow"

export default function CategoryGridTile({ title, color, onPress }) {
  const navigation = useNavigation()

  return (
    <Shadow style={{ height: 140 }}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "red" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainerItem, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </Shadow>
  )
}

const styles = StyleSheet.create({
  // gridContainer styling replaced with Shadow reusable component
  gridContainer: {
    flex: 1,
    margin: 16,
    height: 140,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  innerContainerItem: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
})
