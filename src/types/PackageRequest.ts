export type PackageRequest = {
  id: number;
  packageName: string;
  amount: number;
  paymentMethod?: string;
  profitRate: string;
  duration: string;
  transactionId?: string;
  paymentScreenshotUrl?: string;
  notes?: string;
  status: string;
  user?: {
    id: number;
    email: string;
  };
};
