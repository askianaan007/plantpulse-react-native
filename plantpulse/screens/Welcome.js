import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({navigation}) => {
  const Navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      Navigation.navigate("Login"); // Navigate to the desired screen after 1 second
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer); // Clean up the timer
  }, [Navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Image
        source={require("../assets/logo.png")}
        style={styles.image}
        resizeMode="stretch"
      />

      <TouchableOpacity
        style={styles.UnderBody}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>THE PLANT HEALTH NOTIFIER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006400",
    width: "100%",
  },

  UnderBody: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    marginTop: "90%",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: "80%",
  },

  welcomeText: {
    color: "#fff",
    fontSize: 35,
    marginTop: "30%",
  },
  image: {
    position: "absolute",
    zIndex: 1,
    width: "50%",
    height: "40%",
  },

  bottomText: {
    fontSize: 16,
    color: "#214530",
    letterSpacing: 0.32,
  },
});

export default Welcome;
