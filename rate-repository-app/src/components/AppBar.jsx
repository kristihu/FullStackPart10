import { View, StyleSheet, Pressable } from "react-native";
import { Link, useNavigate } from "react-router-native";
import Text from "./Text";
import Constants from "expo-constants";
import { ScrollView } from "react-native";
import theme from "./theme";
import { useQuery, useApolloClient } from "@apollo/client";
import { ME } from "../graphql/queries";
import AuthStorage from "../utils/authStorage";

const authStorage = new AuthStorage();

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    padding: theme.spacing.medium,
    flexDirection: "row",
  },
  tab: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginRight: theme.spacing.medium,
  },
});

const AppBarTab = ({ title, to, onPress }) => (
  <Link to={to} component={Pressable} onPress={onPress}>
    <Text style={styles.tab}>{title}</Text>
  </Link>
);

const AppBar = () => {
  const { data } = useQuery(ME);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />
        {data?.me ? (
          <AppBarTab title="Sign out" onPress={handleSignOut} />
        ) : (
          <AppBarTab title="Sign in" to="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
