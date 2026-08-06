import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { baseAPIService } from "../services/baseApi.service";
import AuthApi from "../services/AuthApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

export const useUploadProfileImage = (): UseMutationResult<any, any, FormData, unknown> => {
  const dispatch = useDispatch();
  const authApi = new AuthApi();

  return useMutation<any, any, FormData, unknown>({
    mutationFn: async (formData: FormData) => {
      const res = await baseAPIService.post("/uploads/profile-image", formData);
      return res.data ?? res;
    },
    onSuccess: async () => {
      try {
        const profileResp: any = await authApi.getProfile();
        if (profileResp?.user) {
          dispatch(
            setAuth({ accessToken: localStorage.getItem("accessToken") || "", user: profileResp?.user ?? null })
          );
        }
        toast.success("Profile image uploaded");
      } catch (err: any) {
        // ignore profile refresh errors, but still notify
        toast.success("Profile image uploaded");
      }
    },
    onError: (err: any) => {
      const msg = err?.response?.data?.message || err?.message || "Upload failed";
      toast.error(msg);
    },
  });
};

export default useUploadProfileImage;
