import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import TitleText from "../../components/titleText";
import SubmitButton from "../../components/submitButton";
import FooterMenu from "../../components/menus/FooterMenu";
import { PostContext } from "../../context/postContext";
import { AuthContext } from "../../context/authContext";

const AllPlants = ({ navigation }) => {
  const [state] = useContext(AuthContext);
  const [posts] = useContext(PostContext);
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(posts, null, 4)}</Text>
      {/* <TitleText title={"IOT Watering"} />
      <View style={styles.container2}>
        <View style={styles.slider}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scroll}
          >
            <Text style={styles.mainText}>Please select your plant</Text>
            <View>
              <TouchableOpacity
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
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
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
                    style={styles.sliderImage}
                  ></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.slidersubText1}>Teena</Text>
                  <Text style={styles.slidersubText1}>17% Water level</Text>
                  <Text style={styles.slidersubText1}>Temp : 35°C</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
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
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
                    style={styles.sliderImage}
                  ></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.slidersubText1}>Teena</Text>
                  <Text style={styles.slidersubText1}>17% Water level</Text>
                  <Text style={styles.slidersubText1}>Temp : 35°C</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
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
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
                    style={styles.sliderImage}
                  ></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.slidersubText1}>Teena</Text>
                  <Text style={styles.slidersubText1}>17% Water level</Text>
                  <Text style={styles.slidersubText1}>Temp : 35°C</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
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
                style={{ ...styles.sliderContent, backgroundColor: "#A03131" }}
                onPress={() => navigation.navigate("Plants")}
              >
                <View style={styles.sliderContent11}>
                  <Text style={styles.sliderMainText}>Not Healthy</Text>
                  <Image
                    source={require("../../assets/Images/image2.png")}
                    style={styles.sliderImage}
                  ></Image>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.slidersubText1}>Teena</Text>
                  <Text style={styles.slidersubText1}>17% Water level</Text>
                  <Text style={styles.slidersubText1}>Temp : 35°C</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <FooterMenu /> */}
    </View>
  );
};

export default AllPlants;

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
    // height: "100%",
    width: "100%",
    top: "15%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // alignItems: "center",
  },
  scroll: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  slider: {
    width: "100%",
    height: "100%",
    padding: 30,
  },

  mainText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#31A05F",
    marginLeft: 20,
  },
  sliderContent: {
    width: 150,
    height: 220,
    borderRadius: 8,
    backgroundColor: "#31A05F",
    marginLeft: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sliderMainText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  sliderImage: {
    width: 100,
    height: 110,
    resizeMode: "contain",
  },

  slidersubText1: {
    color: "#fff",
    fontSize: 15,
  },
});
