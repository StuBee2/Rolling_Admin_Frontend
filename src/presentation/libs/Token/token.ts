import cookie from "js-cookie";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@src/domain/Models/Auth/auth.model";

interface Storage {
  getToken(key: string): string | undefined;
  setToken(key: string, token: string): void;
  clearToken(): void;
}

class Token implements Storage {
  public getToken(key: string): string | undefined {
    return cookie.get(key);
  }

  public setToken(key: string, token: string): void {
    cookie.set(key, token);
  }

  public clearToken(): void {
    cookie.remove(ACCESS_TOKEN_KEY);
    cookie.remove(REFRESH_TOKEN_KEY);
  }
}

export default new Token();
