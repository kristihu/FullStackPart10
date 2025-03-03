import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  // Get the access token from storage
  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return token ? JSON.parse(token) : null;
  }

  // Add the access token to storage
  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    );
  }

  // Remove the access token from storage
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
