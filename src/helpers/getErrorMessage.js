import axios from "axios";
import { axiosErrorHandler } from "./axiosErrorHandler";

export function getErrorMessage(error) {
  if (axios.isAxiosError(error)) {
    return axiosErrorHandler(error);
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "Something went wrong.";
  }
}
