import { View, Text, StyleSheet,TextInput,Button } from "react-native";
import React, { useState } from "react";
import TitleText from "../../components/titleText";
import InputBox from "../../components/inputBox";
import * as ImagePicker from "expo-image-picker";
import SubmitButton from "../../components/submitButton";

const AddPlant = () => {
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

  return (
    <View style={styles.container}>
      <TitleText title={"Plant Registration"} />
      <View style={styles.inputbox}>
        <InputBox
          inputTitle={"Plant Name"}
          //   value={email}
          //   setValue={setEmail}
        />
        <Text style={{ marginBottom: 10, color: "white" }}>
          About Your Plant
        </Text>
        <TextInput style={styles.about} />
      </View>
      <View style={{ marginTop: "40%" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <SubmitButton
        btnTitle="Submit"
        // loading={loading}
        // handleSubmit={handleSubmit}
        buttonStyle={{ top: 50 }}
      />
    </View>
  );
}

export default AddPlant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31A05F",
    width: "100%",
  },
  inputbox: {
    top: "15%",
    width: "80%",
  },
  about: {
    height: 200,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
});