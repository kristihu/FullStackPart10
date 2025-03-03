import { View, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Text from "./Text";
import theme from "./theme";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  input: {
    height: 40,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    marginBottom: theme.spacing.small,
    paddingHorizontal: theme.spacing.small,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
    marginBottom: theme.spacing.small,
  },
});

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const result = await signIn({ username, password });
      if (result) {
        console.log("Authentication successful:", result);
        navigate("/");
      }
    } catch (e) {
      console.log("Sign-in failed:", e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: theme.fontSizes.heading,
          marginBottom: theme.spacing.medium,
        }}
      >
        Sign In
      </Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              style={[
                styles.input,
                touched.username && errors.username ? styles.errorInput : null,
              ]}
              placeholder="Username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                touched.password && errors.password ? styles.errorInput : null,
              ]}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <Button title="Sign In" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
