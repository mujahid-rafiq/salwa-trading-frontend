import { BaseAPIService } from "../services/baseApi.service";

export type LoginDto = {
  email: string;
  password: string;
};

export type RegisterDto = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export type ForgotPasswordDto = {
  email: string;
};

export type VerifyOtpDto = {
  email: string;
  otp: string;
};

export type ActivateAccountDto = {
  email: string;
  otp: string;
};

export type ResendActivationCodeDto = {
  email: string;
};

export type ResetPasswordDto = {
  email: string;
  otpCode: string;
  newPassword: string;
  confirmPassword: string;
};

export default class AuthApi extends BaseAPIService {
  private readonly baseUrl = "/auth";

  constructor() {
    super();
  }

  async login(dto: LoginDto) {
    const { data } = await this.post(`${this.baseUrl}/login`, dto);
    return data;
  }

  async getProfile() {
    const { data } = await this.get(`${this.baseUrl}/profile`);
    return data;
  }

  async logout() {
    const { data } = await this.post(`${this.baseUrl}/logout`, {});
    return data;
  }

  async register(dto: RegisterDto) {
    const { data } = await this.post(`${this.baseUrl}/register`, dto);
    return data;
  }

  async activateAccount(dto: ActivateAccountDto) {
    const { data } = await this.post(`${this.baseUrl}/activate-account`, dto);
    return data;
  }

  async resendActivationCode(dto: ResendActivationCodeDto) {
    const { data } = await this.post(`${this.baseUrl}/resend-activation-code`, dto);
    return data;
  }

  async refreshToken(dto: { refresh_token: string }) {
    const { data } = await this.post(`${this.baseUrl}/refresh`, dto);
    return data;
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const { data } = await this.post(`${this.baseUrl}/forgot-password`, dto);
    return data;
  }

  async verifyOtp(dto: VerifyOtpDto) {
    const { data } = await this.post(`${this.baseUrl}/verify-otp`, dto);
    return data;
  }

  async resetPassword(dto: ResetPasswordDto) {
    const { data } = await this.post(`${this.baseUrl}/reset-password`, dto);
    return data;
  }

  // async verifyOtp(dto: { email: string; otp: string }) {
  //   const { data } = await this.post(`${this.baseUrl}/verify-otp`, dto);
  //   return data;
  // }

  async setupMfa() {
    const { data } = await this.post(`${this.baseUrl}/mfa/setup`, {});
    return data;
  }

  async setupMfaPublic(dto: { email: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/setup-public`, dto);
    return data;
  }

  async verifyMfaSetup(dto: { token: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/verify-setup`, dto);
    return data;
  }

  async verifyMfaSetupPublic(dto: { email: string; token: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/verify-setup-public`, dto);
    return data;
  }

  async verifyMfaLogin(dto: { userId: number; token: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/verify-login`, dto);
    return data;
  }

  async disableMfa() {
    const { data } = await this.post(`${this.baseUrl}/mfa/disable`, {});
    return data;
  }

  async getMfaStatus() {
    const { data } = await this.post(`${this.baseUrl}/mfa/status`, {});
    return data;
  }

  async checkLockStatus(dto: { email: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/check-lock-status`, dto);
    return data;
  }

  async requestMfaReset(dto: { email: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/request-reset`, dto);
    return data;
  }

  async verifyMfaResetOtp(dto: { email: string; otpCode: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/verify-reset-otp`, dto);
    return data;
  }

  async completeMfaReset(dto: { email: string; otpCode: string }) {
    const { data } = await this.post(`${this.baseUrl}/mfa/complete-reset`, dto);
    return data;
  }
}
