import { Text, View, StyleSheet } from "react-native"

export default function List({ data }) {
  return data.map((dataItem) => (
    <View style={styles.listItem} key={dataItem}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 2,
    marginHorizontal: 12,
    backgroundColor: "#c7caf3",
  },
  itemText: {
    paddingLeft: 6,
    color: "#3a408f",
  },
})
