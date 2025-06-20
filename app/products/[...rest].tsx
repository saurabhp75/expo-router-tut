import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CatchAllProductDetails() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();
  return (
    <View style={styles.container}>
      <Text>Catch all product details </Text>
      <Text>Details about product at {rest.join("/")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
