import axios from "axios";
import { responseHandler } from "./responseHandler";
import token from "@src/presentation/libs/Token/token";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@src/domain/Models/Auth/auth.model";
import CONFIG from "@src/presentation/config/config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.response.use((response) => response, responseHandler);
