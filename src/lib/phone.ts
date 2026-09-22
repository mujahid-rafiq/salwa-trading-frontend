export const E164_PHONE_REGEX = /^\+[1-9]\d{6,14}$/;

export const PHONE_VALIDATION_MESSAGE =
  "Enter a valid phone number with your country code, e.g. +12025550123";

export function normalizePhoneNumber(value: string): string {
  return (value ?? "").replace(/[\s\-().]/g, "");
}

export function toE164PhoneNumber(dial: string, nationalNumber: string): string {
  const digits = nationalNumber.replace(/\D/g, "").replace(/^0+/, "");
  return digits ? `+${dial}${digits}` : "";
}

export function isValidInternationalPhone(value: string): boolean {
  return E164_PHONE_REGEX.test(normalizePhoneNumber(value));
}
