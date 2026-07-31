import { Role } from "../enums/Role";

export interface User {
  id: number;
  email: string;
  fullName?: string;
  phoneNumber?: string;
  role: Role;
}
