import AuthApi from "./AuthApi";
import type { LoginDto, RegisterDto } from "./AuthApi";

const authApi = new AuthApi();

export const login = async (data: LoginDto) => {
  return authApi.login(data);
};

export const register = async (data: RegisterDto) => {
  return authApi.register(data);
};