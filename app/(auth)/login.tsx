import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Login() {
  const loginHandler = () => {
    // dont use router.push() as a logged
    // in user should not be able to go
    // back to login page
    router.replace("/profile");
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Login" onPress={loginHandler} />
      <Link href="./register">Create account</Link>
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
