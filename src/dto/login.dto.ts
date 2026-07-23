import * as yup from "yup";

export class LoginDto {
  email!: string;
  password!: string;

  static yupSchema() {
    return yup.object().shape({
      email: yup
        .string()
        .email("Email format is incorrect.")
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
  }
}
