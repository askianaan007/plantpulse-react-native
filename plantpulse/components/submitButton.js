import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const SubmitButton = ({ handleSubmit, btnTitle, loading, buttonStyle }) => {
  return (
    <View>
      <TouchableOpacity
        style={[[styles.button], buttonStyle]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          {loading ? "please wait..." : btnTitle}
        </Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FBFBFB",
    backgroundColor: "#214530",
    paddingVertical: 10,
    paddingHorizontal: 100,
    // alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: "#FBFBFB",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default SubmitButton;
