import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, { loading, error, data }] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    try {
      const result = await mutate({
        variables: { credentials: { username, password } },
      });

      if (result.data?.authenticate?.accessToken) {
        const accessToken = result.data.authenticate.accessToken;

        await authStorage.setAccessToken(accessToken);

        await apolloClient.resetStore();

        return result.data;
      }

      throw new Error("Authentication failed, no access token.");
    } catch (e) {
      console.error("Sign-in error:", e);
      throw e;
    }
  };

  return [signIn, { loading, error, data }];
};

export default useSignIn;
