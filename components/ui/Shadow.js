import { View, StyleSheet, Platform } from "react-native"

// reusable shadow component/styles
export default function Shadow({ children, style }) {
  return <View style={[styles.gridContainer, style]}>{children}</View>
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
})
