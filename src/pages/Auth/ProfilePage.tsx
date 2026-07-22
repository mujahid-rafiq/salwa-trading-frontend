const EditProfilePage = () => {
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

              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-[#1F1F1F]">

                <span className="text-5xl font-bold text-[#D4AF37]">
                  M
                </span>

              </div>

              <button
                className="absolute bottom-1 right-1 rounded-full bg-[#D4AF37] p-2 text-black shadow-lg transition hover:scale-110"
              >
                ✏️
              </button>

            </div>

            <button
              className="mt-4 rounded-lg border border-[#D4AF37] px-5 py-2 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Upload Photo
            </button>

          </div>

          {/* Form */}
          <form className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+92 300 1234567"
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20"
              />
            </div>

            {/* Buttons */}

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">

              <button
                type="submit"
                className="flex-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Save Changes
              </button>

              <button
                type="button"
                className="flex-1 rounded-xl border border-[#D4AF37] py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default EditProfilePage;