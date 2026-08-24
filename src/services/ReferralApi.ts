import { BaseAPIService } from "./baseApi.service";

export type ReferralDetails = {
  referralCode: string;
  referralLink: string;
  directReferrals: Array<{
    id: number;
    fullName?: string;
    email: string;
    createdAt: string;
  }>;
};

export default class ReferralApi extends BaseAPIService {
  async getMine(): Promise<ReferralDetails> {
    const { data } = await this.get("/users/referral/me");
    return data;
  }
}