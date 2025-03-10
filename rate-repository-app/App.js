import { NativeRouter } from "react-router-native";

import { ApolloProvider } from "@apollo/client";
import Constants from "expo-constants";
import createApolloClient from "./src/utils/apolloClient";
import Main from "./src/components/Main";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import AuthStorage from "./src/utils/authStorage";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  console.log(Constants.expoConfig.extra, "extra?");
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
