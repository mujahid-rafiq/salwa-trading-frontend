import { useEffect } from "react";

const SiteBlockedPage = () => {
  useEffect(() => {
    document.title = "Server error 404";
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0b0b] px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.2em] text-white/50">Server error 404</p>
      <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">Your website is temporarily blocked.</h1>
    </main>
  );
};

export default SiteBlockedPage;
