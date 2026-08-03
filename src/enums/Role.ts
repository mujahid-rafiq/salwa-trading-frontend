export const Role = {
  ADMIN: 'admin',
  CLIENT: 'client',
} as const;

export type Role = typeof Role[keyof typeof Role];
