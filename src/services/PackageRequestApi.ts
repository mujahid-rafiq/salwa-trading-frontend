import { BaseAPIService } from "./baseApi.service";

export type CreatePackageRequestDto = {
  packageName: string;
  amount: number;
  paymentMethod: string;
  profitRate: string;
  duration: string;
  transactionId?: string;
  paymentScreenshotUrl?: string;
  notes?: string;
};

export default class PackageRequestApi extends BaseAPIService {
  private readonly baseUrl = "/package-requests";

  constructor() {
    super();
  }

  async uploadPaymentImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await this.post("/uploads/payment-image", formData);
    return data;
  }

  async submitRequest(dto: CreatePackageRequestDto) {
    const { data } = await this.post(this.baseUrl, dto);
    return data;
  }

  async getMyRequests() {
    const { data } = await this.get(`${this.baseUrl}/me`);
    return data;
  }

  async getProfitHistory() {
    const { data } = await this.get(`${this.baseUrl}/me/profit-history`);
    return data;
  }

  async getAdminDashboard() {
    const { data } = await this.get(`${this.baseUrl}/admin/dashboard`);
    return data;
  }

  async getPendingRequests() {
    const { data } = await this.get(`${this.baseUrl}/admin/pending`);
    return data;
  }

  async approveRequest(id: number) {
    const { data } = await this.post(`${this.baseUrl}/admin/${id}/approve`, {});
    return data;
  }

  async rejectRequest(id: number, reason?: string) {
    const { data } = await this.post(`${this.baseUrl}/admin/${id}/reject`, { reason });
    return data;
  }
}
