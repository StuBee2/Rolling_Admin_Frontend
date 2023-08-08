import { newAccessTokenResponse } from "../../../domain/Auth/auth.domain";

export interface AuthPort {
  postRefreshToken(token: string): Promise<newAccessTokenResponse>;
}
