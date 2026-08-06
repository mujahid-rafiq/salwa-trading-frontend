import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import useResponsive from "../../hooks/useResponsive";
import { CloseIcon } from "../../svg";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const { isMobile } = useResponsive();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex">
      {/* Desktop sidebar */}
      {!isMobile && <Sidebar />}

      <div className="flex-1 min-h-screen">
        <Topbar onToggle={() => setMenuOpen((s) => !s)} />

        <main className="p-6">{children}</main>
      </div>

      {/* Mobile overlay sidebar (slides from right) */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70 transition-opacity duration-200 opacity-100"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute inset-0 bg-[#0f1724] md:p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold">S</div>
                <div>
                  <div className="text-sm font-semibold text-white">Salwa Trading</div>
                  <div className="text-xs text-gray-400">Dashboard</div>
                </div>
              </div>

              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 text-gray-300 cursor-pointer">
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-2">
              <Sidebar hideHeader fullWidth onClose={() => setMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
