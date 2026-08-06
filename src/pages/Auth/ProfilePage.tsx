import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import AuthApi from "../../services/AuthApi";
// import { setAuth } from "../../redux/slices/authSlice";
import useUploadProfileImage from "../../mutation/useUploadProfileImage";
import dummyPicOne from "../../assets/dummyPicOne.jpg";
import type { RootState } from "../../redux/store";

const EditProfilePage = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  // const dispatch = useDispatch();
  // const authApi = new AuthApi();
  const user = useSelector((state: RootState) => state.auth.user);

  const navigate = useNavigate();

  const onUploadClick = () => {
    fileRef.current?.click();
  };

  const uploadMutation = useUploadProfileImage();

  const backendOrigin = import.meta.env.VITE_REACT_APP_BASE_API_URL || import.meta.env.VITE_REACT_APP_LIVE_SERVER_URL || "http://localhost:3000";
  const profileSrc = user?.profileImage ? `${backendOrigin}${user.profileImage}` : dummyPicOne;

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    uploadMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-4 py-10">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-3xl">

        <div className="rounded-3xl border border-yellow-500/20 bg-[#151515]/90 p-8 shadow-[0_0_60px_rgba(212,175,55,0.08)] backdrop-blur-xl">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Edit Profile
            </h1>

            <p className="mt-2 text-gray-400">
              Update your personal information
            </p>
          </div>

          {/* Profile Image */}
          <div className="mt-8 flex flex-col items-center">
            <div className="relative">
              <button
                type="button"
                onClick={onUploadClick}
                className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-[#D4AF37] bg-[#111111] shadow-lg transition hover:scale-[1.02]"
                aria-label="Upload profile photo"
              >
                <img
                  src={profileSrc}
                  alt="profile"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 transition duration-200 hover:bg-black/20"></div>
                <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-lg">
                  ✏️
                </div>
                {uploadMutation.status === 'pending' && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 text-white">
                    Uploading...
                  </div>
                )}
              </button>

              <input ref={fileRef} onChange={onFileChange} type="file" accept="image/*" className="hidden" />
            </div>

            <button
              className="mt-4 rounded-lg border border-[#D4AF37] px-5 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              type="button"
              onClick={onUploadClick}
              disabled={uploadMutation?.status === 'pending'}
            >
              {uploadMutation.status === 'pending' ? 'Uploading...' : 'Change Profile Photo'}
            </button>

            <p className="mt-3 max-w-xs text-center text-sm text-gray-400">
              Only your profile picture can be updated here. Full name, email, and password are not editable on this page.
            </p>
          </div>

          {/* Profile Info */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Full Name</label>
              <div className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white">
                {user?.fullName ?? 'Not provided'}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Email</label>
              <div className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white">
                {user?.email ?? 'Not provided'}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">Phone Number</label>
              <div className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white">
                {user?.phoneNumber ?? 'Not provided'}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center ">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full max-w-md rounded-lg cursor-pointer border border-[#D4AF37] bg-transparent px-6 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Go Back
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default EditProfilePage;