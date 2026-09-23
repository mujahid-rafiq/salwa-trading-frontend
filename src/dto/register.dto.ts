import * as yup from "yup";
import { E164_PHONE_REGEX, normalizePhoneNumber, PHONE_VALIDATION_MESSAGE } from "../lib/phone";

export class RegisterDto {
  fullName!: string;
  email!: string;
  phoneNumber!: string;
  password!: string;
  confirmPassword!: string;
  referralCode?: string;

  static yupSchema() {
    return yup.object().shape({
      fullName: yup.string().required("Full name is required"),
      email: yup.string().email("Email format is incorrect.").required("Email is required"),
      phoneNumber: yup
        .string()
        .required("Phone number is required")
        .transform((value) => normalizePhoneNumber(value ?? ""))
        .matches(E164_PHONE_REGEX, PHONE_VALIDATION_MESSAGE),
      password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    });
  }
}
