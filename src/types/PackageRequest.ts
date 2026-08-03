export type PackageRequest = {
  id: number;
  packageName: string;
  amount: number;
  profitRate: string;
  duration: string;
  transactionId?: string;
  notes?: string;
  status: string;
  user?: {
    id: number;
    email: string;
  };
};
