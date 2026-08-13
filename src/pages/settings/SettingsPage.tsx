import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-routes/constants";

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-yellow-500/10 bg-gradient-to-r from-yellow-500/10 to-amber-700/5 p-4 md:p-6">
        <div className="md:text-left">
          <h2 className="text-2xl font-bold text-white">Settings</h2>
          <p className="mt-1 text-sm text-gray-300">
            Manage your account preferences and security settings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
          <h3 className="text-lg font-semibold text-white">Account</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-300">
            <div className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-[#111827] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span>Email notifications</span>
              <button type="button" className="cursor-pointer rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black self-start sm:self-auto">
                Enabled
              </button>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-[#111827] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span>Two-factor authentication</span>
              <button type="button" className="cursor-pointer rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-200 self-start sm:self-auto">
                Setup
              </button>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-[#111827] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span>Profile visibility</span>
              <button type="button" className="cursor-pointer rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-200 self-start sm:self-auto">
                Private
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
          <h3 className="text-lg font-semibold text-white">Security</h3>
          <div className="mt-4 space-y-3">
            <button
              type="button"
              className="cursor-pointer w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-left text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
            >
              Change password
            </button>
            <button
              type="button"
              className="cursor-pointer w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-left text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
            >
              Update recovery email
            </button>
            <button
              type="button"
              className="cursor-pointer w-full rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-left text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
            >
              Login activity
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4 md:p-6">
        <h3 className="text-lg font-semibold text-white">Preferences</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
          >
            Language
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
          >
            Time zone
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-gray-200 transition hover:border-yellow-500 hover:text-yellow-400"
          >
            Currency
          </button>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={() => navigate(ROUTES.DASHBOARD)}
          className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg border border-yellow-500/40 bg-yellow-500 px-3 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
        >
          <span aria-hidden="true">←</span>
          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
