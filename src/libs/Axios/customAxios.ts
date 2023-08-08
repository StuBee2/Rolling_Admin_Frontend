import axios from "axios";
import CONFIG from "../../config/config.json";

import token from "../Token/token";
import { responseHandler } from "./responseHandler";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "../../domain/Auth/auth.domain";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.response.use((response) => response, responseHandler);
