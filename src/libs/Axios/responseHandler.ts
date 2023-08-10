import { AxiosError } from "axios";
import Token from "../Token/token";
import { customAxios } from "./customAxios";
import authAdapter from "../../services/Auth/auth.adapter";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../domain/Auth/auth.domain";

export const responseHandler = async (config: AxiosError) => {
  const access_token = Token.getToken(ACCESS_TOKEN_KEY);
  const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);

  if (access_token && refresh_token && config.response?.status === 401) {
    try {
      const { accessToken } = await authAdapter.postRefreshToken(refresh_token);

      Token.setToken(ACCESS_TOKEN_KEY, accessToken);

      customAxios.defaults.headers.common[
        REQUEST_TOKEN_KEY
      ] = `Bearer ${accessToken}`;
    } catch (e) {
      window.alert("세션이 만료되었습니다!");
      Token.clearToken();
      window.location.href = "/signin";
    }
  }
  return Promise.reject(config);
};
