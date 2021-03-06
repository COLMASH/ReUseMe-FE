import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import { userSignin } from "../store/userReducer";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

function LoginScreen() {
  const dispatch = useDispatch();

  const handleSignIn = ({ email, password }) => {
    dispatch(userSignin(email, password));
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logoGris.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSignIn}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.green,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
