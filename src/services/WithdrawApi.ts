import { BaseAPIService } from "./baseApi.service";

export type WithdrawDto = {
  amount: number;
  source: "earnings" | "bonus";
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
}
