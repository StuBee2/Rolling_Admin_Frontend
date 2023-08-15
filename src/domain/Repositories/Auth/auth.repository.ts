import { newAccessToken } from "../../Models/Auth/auth.model";

export interface AuthRepository {
  postRefreshToken(token: string): Promise<newAccessToken>;
}
