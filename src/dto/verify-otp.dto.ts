import * as yup from "yup";

export class VerifyOtpDto {
  email!: string;
  otp!: string;

  static yupSchema() {
    return yup.object().shape({
      email: yup.string().email("Email format is incorrect.").required("Email is required"),
      otp: yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
    });
  }
}
