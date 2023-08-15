import { AxiosError } from "axios";
import { customAxios } from "./customAxios";
import authRepositoryImpl from "@src/data/Repositories/Auth/auth.repositoryImpl";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@src/domain/Models/Auth/auth.model";
import token from "@src/presentation/libs/Token/token";

export const responseHandler = async (config: AxiosError) => {
  const access_token = token.getToken(ACCESS_TOKEN_KEY);
  const refresh_token = token.getToken(REFRESH_TOKEN_KEY);

  if (access_token && refresh_token && config.response?.status === 401) {
    try {
      const { accessToken } = await authRepositoryImpl.postRefreshToken(
        refresh_token
      );

      token.setToken(ACCESS_TOKEN_KEY, accessToken);

      customAxios.defaults.headers.common[
        REQUEST_TOKEN_KEY
      ] = `Bearer ${accessToken}`;
    } catch (e) {
      window.alert("세션이 만료되었습니다!");
      token.clearToken();
      window.location.href = "/signin";
    }
  }
  return Promise.reject(config);
};
