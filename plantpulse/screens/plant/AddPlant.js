import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TitleText from "../../components/titleText";
import InputBox from "../../components/inputBox";
import * as ImagePicker from "expo-image-picker";
import SubmitButton from "../../components/submitButton";
import FooterMenu from "../../components/menus/FooterMenu";
import axios from "axios";

const AddPlant = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //local state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState("");

  //handle from data post
  const handlePost = async () => {
    try {
      setLoading(true);
      if (!title || !description) {
        alert("Please add all the fields");
      }
      const { data } = await axios.post("/post/create-post", {
        title,
        description,
      });
      setLoading(false);
      alert(data?.message);
    } catch (error) {
      alert(error.response.data.message || error.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/login back2.jpg")}
      style={styles.backgroundImage}
    >
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: "100%",
          width: "100%",
          position: "absolute",
          alignItems: "center",
        }}
      >
        <TitleText title={"Plant Registration"} />
        <View style={styles.inputbox}>
          <TextInput
            style={styles.title}
            placeholder="Plant Name"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <ScrollView>
            <TextInput
              style={styles.about}
              multiline={true}
              numberOfLines={8}
              value={description}
              placeholder="About Plant"
              onChangeText={(text) => setDescription(text)}
            />
          </ScrollView>
        </View>
        <View style={{ marginTop: "40%" }}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <SubmitButton
          btnTitle="Submit"
          // loading={loading}
          handleSubmit={handlePost}
          buttonStyle={{ top: 50 }}
        />
        <FooterMenu />
      </View>
    </ImageBackground>
  );
};

export default AddPlant;
const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    resizeMode: "cover",
  },
  inputbox: {
    top: "15%",
    width: "80%",
  },
  title: {
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
  about: {
    padding: 10,
    textAlignVertical: "top",
    height: 200,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    // color: "#af9f85",
  },
});
