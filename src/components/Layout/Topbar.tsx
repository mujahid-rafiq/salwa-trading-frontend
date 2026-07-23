import React from "react";

const Topbar: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-transparent">
      <div className="flex items-center gap-4">
        <button className="text-gray-300 md:hidden">☰</button>
        <div className="text-lg font-semibold text-white">Dashboard</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-3 text-sm text-gray-300">
          <div className="px-3 py-1 rounded-full bg-[#111827]/60">EN</div>
          <div className="px-3 py-1 rounded-full bg-[#111827]/60">Notifications</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-300">Mujahid Rafiq</div>
          <div className="h-8 w-8 rounded-full bg-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
