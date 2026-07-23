import * as yup from "yup";

export class ProfileDto {
  fullName?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;

  static yupSchema() {
    return yup.object().shape({
      fullName: yup.string().required("Full name is required"),
      phoneNumber: yup
        .string()
        .matches(/^([+]92|0)?3\d{9}$/, "Phone number is invalid")
        .required("Phone number is required"),
      password: yup.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match"),
    });
  }
}
