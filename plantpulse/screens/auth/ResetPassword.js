import {React,useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import TitleText from "../../components/titleText";
import InputBox from "../../components/inputBox";
import SubmitButton from "../../components/submitButton";


const ResetPass = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <TitleText title={"Reset Password"} />

      <View style={styles.inputBox}>
        <Text style={{marginBottom:30,fontSize:18,fontWeight:"bold",color:"#fff"}}>Please enter your email address to request a password reset</Text>
        <InputBox
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />

        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton btnTitle="Reset" buttonStyle={{ top: 230 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#31A05F",
    width: "100%",
  },
  inputBox: {
    top: "20%",
    width: "80%",
  },
});

export default ResetPass;
