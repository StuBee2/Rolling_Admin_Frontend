import authRepositoryImpl from "@src/data/Repositories/Auth/auth.repositoryImpl";
import { useMutation } from "react-query";

export const usePostRefreshToken = () => {
  const mutate = useMutation((token: string) =>
    authRepositoryImpl.postRefreshToken(token)
  );
  return mutate;
};
