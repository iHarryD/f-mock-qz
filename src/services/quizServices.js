import { baseAxiosInstance } from "./baseAxiosInstance";

export async function getAllQuizes(
  loadingState = null,
  successCallback = null,
  failureCallback = null
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get("/get-quizes");
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}

export async function getQuestionsOfQuiz(
  quizCode,
  loadingState = null,
  successCallback = null,
  failureCallback = null
) {
  try {
    if (loadingState) loadingState(true);
    const result = await baseAxiosInstance().get(
      `/get-questions?quizCode=${quizCode}`
    );
    if (successCallback) successCallback(result);
  } catch (err) {
    if (failureCallback) failureCallback(err);
  } finally {
    if (loadingState) loadingState(false);
  }
}
