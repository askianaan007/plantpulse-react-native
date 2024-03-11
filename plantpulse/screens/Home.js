import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 27,
            fontWeight: "bold", 
          }}
        >
          Hi Aski!
        </Text>
        <TouchableOpacity style={styles.profile}>
          <ImageBackground
            source={require("../assets/Images/profile.png")}
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFA900",
          width: "92%",
          height: 130,
          borderRadius: 20,
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 10,
        }}
        onPress={() => navigation.navigate("Plants")}
      >
        <Image source={require("../assets/Images/low.png")}></Image>
        <View style={{ width: 200, paddingLeft: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>
            Teena is very thirsty! Please provide water promptly
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: "#BE0D0D",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
          Water level 17%
          </Text>
        </View>
        <Image source={require("../assets/Images/tree111.png")}></Image>
      </TouchableOpacity>
      <View
        style={{
          width: "92%",
          height: 278,
          backgroundColor: "#fff",
          borderRadius: 20,
          marginTop: 40,
          paddingTop: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            overflow: "hidden",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
              onPress={() => navigation.navigate("Plants")}
            >
              <View style={styles.sliderContent11}>
                <Text style={styles.sliderMainText}>Not Healthy</Text>
                <Image
                  source={require("../assets/Images/image2.png")}
                  style={styles.sliderImage}
                ></Image>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.slidersubText1}>Teena</Text>
                <Text style={styles.slidersubText1}>17% Water level</Text>
                <Text style={styles.slidersubText1}>Temp : 35°C</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sliderContent}
              onPress={() => navigation.navigate("Plants")}
            >
              <View style={styles.sliderContent11}>
                <Text style={styles.sliderMainText}>Not Healthy</Text>
                <Image
                  source={require("../assets/Images/image2.png")}
                  style={styles.sliderImage}
                ></Image>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.slidersubText1}>Teena</Text>
                <Text style={styles.slidersubText1}>17% Water level</Text>
                <Text style={styles.slidersubText1}>Temp : 35°C</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.sliderContent, backgroundColor: "#FFA900" }}
              onPress={() => navigation.navigate("Plants")}
            >
              <View style={styles.sliderContent11}>
                <Text style={styles.sliderMainText}>Not Healthy</Text>
                <Image
                  source={require("../assets/Images/image2.png")}
                  style={styles.sliderImage}
                ></Image>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.slidersubText1}>Teena</Text>
                <Text style={styles.slidersubText1}>17% Water level</Text>
                <Text style={styles.slidersubText1}>Temp : 35°C</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Text style={{ left: "82%", marginTop: 10 }}>See all</Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: "92%",
          height: 140,
          borderRadius: 20,
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 20, alignItems: "center" }}>
          <TouchableOpacity
            style={styles.menuBtn}
            onPress={() => navigation.navigate("AddPlant")}
          >
            <Entypo name="water" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.menuText}>watering</Text>
        </View>
        <View style={{ marginLeft: 40, alignItems: "center" }}>
          <TouchableOpacity style={styles.menuBtn}>
            <FontAwesome5 name="temperature-high" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Humidity</Text>
        </View>
        <View style={{ marginLeft: 40, alignItems: "center" }}>
          <TouchableOpacity style={styles.menuBtn}>
            <AntDesign name="calendar" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.menuText}>Schedule</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31A05F",
    width: "100%",
  },

  profile: {
    width: 60,
    height: 60,
    borderRadius: 99,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "black",
  },
  sliderContent: {
    width: 135,
    height: 216,
    borderRadius: 8,
    backgroundColor: "#31A05F",
    marginLeft: 10,
  },

  sliderContent11: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  sliderMainText: {
    fontSize: 18,
    color: "#fff",
    transform: [{ rotate: "-90deg" }],
    marginLeft: -20,
  },
  sliderImage: {
    width: 130,
    height: 140,
    resizeMode: "contain",
    marginLeft: -40,
  },

  slidersubText1: {
    color: "#fff",
    fontSize: 15,
  },
  menuBtn: {
    backgroundColor: "#214530",
    height: 80,
    width: 80,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    fontSize: 15,
    marginTop: 5,
  },
});
export default MainScreen;
