import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import AuthApi from "../../services/AuthApi";
import { setAuth } from "../../redux/slices/authSlice";
import dummyPicOne from "../../assets/dummyPicOne.jpg";
import type { RootState } from "../../redux/store";
import { MenuIcon, CloseIcon } from "../../svg";

const Topbar: React.FC<{ menuOpen?: boolean; onToggle?: () => void }> = ({ menuOpen, onToggle }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const authApi = new AuthApi();

  useEffect(() => {
    if (!user && localStorage.getItem("accessToken")) {
      authApi
        .getProfile()
        .then((response: any) => {
          if (response?.user) {
            dispatch(setAuth({ accessToken: localStorage.getItem("accessToken") || "", user: response.user }));
          }
        })
        .catch(() => {
          // Ignore profile fetch errors; user will stay logged out or empty.
        });
    }
  }, [authApi, dispatch, user]);

  const displayName = user?.fullName || "User";
  const displayId = user?.id ? String(user.id).padStart(6, "0") : "000000";

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-transparent">
      <div className="flex items-center gap-4">
        <button onClick={onToggle} aria-label="Toggle menu" className="text-gray-300 md:hidden p-2 cursor-pointer">
          <MenuIcon className="h-6 w-6 text-gray-300" />
        </button>
        <div className="text-lg font-semibold text-white">Dashboard</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-lg text-gray-300">{displayName}</div>
          <div className="flex flex-col items-center gap-1">
            <img id="profile-avatar" src={dummyPicOne} alt="Profile" className="h-11 w-11 rounded-full" />
            <div className="text-xs text-gray-400">User ID: {displayId}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
