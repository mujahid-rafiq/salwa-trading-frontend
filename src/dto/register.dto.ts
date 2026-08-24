import * as yup from "yup";

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
        .matches(/^([+]92|0)?3\d{9}$/, "Phone number is invalid")
        .required("Phone number is required"),
      password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    });
  }
}
