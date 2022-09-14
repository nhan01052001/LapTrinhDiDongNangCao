import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const imgEys = require("../assets/eye1.png");
const imgFB = require("../assets/fb.png");
const imgZL = require("../assets/zl.png");
const imgGG = require("../assets/gg.png");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}> Login </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
          <View style={styles.wrapE}>
            <Image source={imgEys} />
          </View>
        </View>
      </View>

      <View style={styles.vButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.vText}>
        <Text style={styles.text2}>When you agree to terms and conditions</Text>
        <TouchableOpacity>
          <Text style={[styles.text2, { color: "blue" }]}>
            For got your password?
          </Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Or login with</Text>
      </View>

      <View style={styles.vLoginDiff}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Image source={imgFB} style={[styles.loginFB, styles.vWidth]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Image source={imgZL} style={[styles.loginZL, styles.vWidth]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Image source={imgGG} style={[styles.loginGG, styles.vWidth]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d8efde",
  },

  title: {
    marginTop: 50,
    alignItems: "center",
  },

  textTitle: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },

  form: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },

  input: {
    width: "85%",
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    fontSize: 20,
    marginVertical: 20,
  },

  wrapE: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "7.5%",
    top: "30%",
  },

  vButton: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },

  button: {
    width: 200,
    padding: 10,
    backgroundColor: "#E53935",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
  },

  btnText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },

  vText: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },

  text2: {
    alignItems: "center",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 10,
  },

  vLoginDiff: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  vWidth: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 50,
  },
});

export default Login;
