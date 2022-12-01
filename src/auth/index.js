import axios from "axios";
import { axiosInstance } from "../axiosInstance";
import { Alert } from "react-native";
import { useUser } from "./useUser";
import { useContext } from "react";
import { AuthContext } from "../context";

export function useAuth() {
  const authCtx = useContext(AuthContext);
  const SERVER_ERROR = "There was an error contacting the server.";
  const { clearUser, updateUser, pendingVerification } = useUser();

  async function authServerCall(urlEndpoint, email, password) {
    try {
      const { data, status } = await axiosInstance({
        url: urlEndpoint,
        method: "POST",
        data: { email, password },
        headers: { "Content-Type": "application/json" },
      });

      if ("user" in data && "token" in data) {
        authCtx.authenticate(data);
        updateUser(data);
      }
    } catch (errorResponse) {
      const title =
        axios.isAxiosError(errorResponse) &&
        errorResponse?.response?.data?.message
          ? errorResponse?.response?.data?.message
          : SERVER_ERROR;
      Alert.alert("Error", title, [{ text: "Ok" }]);
    }
  }

  async function regCall(urlEndpoint, email, password) {
    try {
      const { data, status } = await axiosInstance({
        url: urlEndpoint,
        method: "POST",
        data: { email, password },
        headers: { "Content-Type": "application/json" },
      });

      // if ("user" in data && "token" in data) {
      //   authCtx.authenticate(data);
      //   updateUser(data);
      // }

      if (data) {
        authCtx.verification(data);
        pendingVerification(data);
      }
    } catch (errorResponse) {
      console.log(errorResponse);
      const title =
        axios.isAxiosError(errorResponse) &&
        errorResponse?.response?.data?.message
          ? errorResponse?.response?.data?.message
          : SERVER_ERROR;
      Alert.alert("Error", title, [{ text: "Ok" }]);
    }
  }

  async function signin(email, password) {
    authServerCall("/auth/login", email, password);
  }
  async function signup(email, password) {
    regCall("/vendor/auth/registerUser", email, password);
  }

  function signout() {
    // clear user from stored user data
    clearUser();
    Alert.alert("Info", "Logged out", [{ text: "Ok" }]);
  }

  // Return the user object and auth methods
  return {
    signin,
    signup,
    signout,
  };
}
