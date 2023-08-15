import { AuthRepository } from "@src/domain/Repositories/Auth/auth.repository";
import { newAccessToken } from "@src/domain/Models/Auth/auth.model";
import axios from "axios";
import CONFIG from "@src/presentation/config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  async postRefreshToken(token: string): Promise<newAccessToken> {
    const { data } = await axios.post(`${CONFIG.SERVER}/auth/refresh`, token);
    return data;
  }
}

export default new AuthRepositoryImpl();
