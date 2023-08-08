import axios from "axios";
import CONFIG from "../../config/config.json";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "../../constants/Auth/auth.constants";
import token from "../Token/token";
import { responseHandler } from "./responseHandler";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.response.use((response) => response, responseHandler);
