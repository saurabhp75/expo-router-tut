import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  const isLoggedIn = false; // Replace with actual authentication logic

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Redirect href="/login" />;
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
