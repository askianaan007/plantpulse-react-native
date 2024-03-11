import { View, Text, StyleSheet, Image } from "react-native";
import React from 'react'
import TitleText from "../../components/titleText";
import SubmitButton from "../../components/submitButton";

const Plants = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <TitleText title={"Senarita"} />
      <View style={styles.image_container}>
        <Image
          source={require("../../assets/Images/image2.png")}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.name}>Water level</Text>
        <Text style={styles.water}>65%</Text>
        <SubmitButton
          btnTitle="Fill"
          // loading={loading}
          // handleSubmit={handleSubmit}
          buttonStyle={{ top: 120 }}
        />
      </View>
    </View>
  );
};

export default Plants
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31A05F",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },
  container2: {
    backgroundColor: "#fff",
    height: "50%",
    width: "100%",
    top: "50%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  image_container: {
    position: "absolute",
    // backgroundColor:"red",
    left: "30%",
    zIndex: 1,
    top: 200,
  },
  image: {
    height: 350,
    width: 250,
    // top: 150,
    left: 0,
  },
  name: {
    top: 70,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  water: {
    fontSize: 60,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    top: 70,
  },
});