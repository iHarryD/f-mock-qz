import { baseAxiosInstance } from "./baseAxiosInstance";

export async function login(
  email,
  password,
  loadingState,
  successCallback,
  failureCallback
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().post("/login", {
      email,
      password,
    });
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    loadingState(false);
  }
}

export async function signup(
  email,
  password,
  loadingState,
  successCallback,
  failureCallback
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().post("/signup", {
      email,
      password,
    });
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    loadingState(false);
  }
}
