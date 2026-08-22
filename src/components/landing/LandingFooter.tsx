import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../app-routes/constants";
import noovacorLogo from "../../assets/noovacorLogo.png";

const LandingFooter = () => (
  <footer className="border-t border-white/10 bg-[#080808] px-6 py-12 lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <Link to={ROUTES.HOME} className="flex items-center gap-2 hover:opacity-80 transition w-fit">
          <img src={noovacorLogo} alt="Noovacor Logo" className="h-8 w-8 object-contain" />
          <span className="font-display text-2xl text-[#f4d678]">Noovacor</span>
        </Link>
        <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">A considered platform for exploring opportunities and keeping a clearer view of your financial journey.</p>
      </div>
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Explore</h2>
        <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">
          <a href="#opportunities" className="transition hover:text-[#f4d678]">Opportunities</a>
          <a href="#approach" className="transition hover:text-[#f4d678]">Our approach</a>
          <a href="#faq" className="transition hover:text-[#f4d678]">FAQ</a>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Contact</h2>
        <div className="mt-5 space-y-4 text-sm text-white/45">
          <p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#d4af37]" /> 245 Madison Avenue, New York, NY 10016</p>
          <p className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[#d4af37]" /> +1 (212) 555-0187</p>
          <p className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-[#d4af37]" /> hello@noovacor.com</p>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
      <span>© 2026 Noovacor. All rights reserved.</span>
      <div className="flex gap-5"><Link to={ROUTES.LOGIN} className="hover:text-white">Sign in</Link><Link to={ROUTES.SIGNUP} className="hover:text-white">Create account</Link></div>
    </div>
  </footer>
);

export default LandingFooter;