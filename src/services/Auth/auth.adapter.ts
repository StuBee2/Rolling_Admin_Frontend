import { AuthPort } from "../../application/Auth/port/auth.port";
import axios from "axios";
import CONFIG from "../../config/config.json";
import { newAccessTokenResponse } from "../../domain/Auth/auth.domain";

class AuthAdapter implements AuthPort {
  public async postRefreshToken(
    token: string
  ): Promise<newAccessTokenResponse> {
    const { data } = await axios.post(`${CONFIG.SERVER}/auth/refresh`, token);
    return data;
  }
}

export default new AuthAdapter();
