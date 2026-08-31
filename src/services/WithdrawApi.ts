import { BaseAPIService } from "./baseApi.service";

export type WithdrawDto = {
  amount: number;
  source: "earnings" | "bonus";
  paymentMethod: "Bank transfer" | "EasyPaisa" | "JazzCash" | "USDT";
  bankName?: string;
  iban?: string;
  accountTitle?: string;
  mobileNumber?: string;
  notes?: string;
};

export default class WithdrawApi extends BaseAPIService {
  private readonly baseUrl = "/withdrawals";

  constructor() {
    super();
  }

  async withdraw(dto: WithdrawDto) {
    const { data } = await this.post(this.baseUrl, dto);
    return data;
  }

  async getBalances() {
    const { data } = await this.get(`${this.baseUrl}/balances`);
    return data;
  }

  async getMyHistory() {
    const { data } = await this.get(`${this.baseUrl}/me/history`);
    return data;
  }

  async getPendingWithdrawals() {
    const { data } = await this.get(`${this.baseUrl}/admin/pending`);
    return data;
  }

  async getAdminDashboard() {
    const { data } = await this.get(`${this.baseUrl}/admin/dashboard`);
    return data;
  }

  async approveWithdrawal(id: number) {
    const { data } = await this.post(`${this.baseUrl}/admin/${id}/approve`, {});
    return data;
  }

  async rejectWithdrawal(id: number, reason?: string) {
    const { data } = await this.post(`${this.baseUrl}/admin/${id}/reject`, { reason });
    return data;
  }
}
