import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProductsLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <View style={styles.discountedProducts}>
        <Text>Discounted Products</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  discountedProducts: {
    padding: 20,
    backgroundColor: "orange",
    width: "100%",
  },
});
