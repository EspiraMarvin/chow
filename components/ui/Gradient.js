import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function Gradient({ children }) {
  return (
    <LinearGradient
      colors={["#fdd5ea", "#fff5cc", "#d0fbfc"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.5, 0.7]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
