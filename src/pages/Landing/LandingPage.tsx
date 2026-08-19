import { ArrowRight, BarChart3, Building2, Check, HeartPulse, Menu, TrendingUp, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/landing/ui/accordion";
import { ROUTES } from "../../app-routes/constants";
import LandingFooter from "../../components/landing/LandingFooter";
import heroTrading from "../../assets/hero-trading.jpg";
import platformPreview from "../../assets/platform-preview.jpg";
import testimonialImage from "../../assets/testimonial-1.jpg";
import businessmanTrading from "../../assets/businessmanTrading.jpg";
import candleStick from "../../assets/candleStick.jpg";
import tabTrading from "../../assets/tabTrading.jpg";
import tradingChart from "../../assets/TradingChart.jpg";

const opportunities = [
  {
    title: "Trading",
    description: "Explore structured opportunities connected to global financial markets.",
    icon: TrendingUp,
    route: ROUTES.TRADING_INVESTMENT,
  },
  {
    title: "Property",
    description: "Build exposure to tangible real estate assets with a long-term perspective.",
    icon: Building2,
    route: ROUTES.PROPERTY_INVESTMENT,
  },
  {
    title: "Medical",
    description: "Discover opportunities connected to healthcare and pharmaceutical innovation.",
    icon: HeartPulse,
    route: ROUTES.MEDICAL_INVESTMENT,
  },
];

const benefits = [
  "A clear view of your investment activity",
  "Structured opportunities across multiple sectors",
  "A simple, secure account experience",
];

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0b] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link to={ROUTES.HOME} className="font-display text-xl font-semibold tracking-wide text-[#f4d678]">Salwa Trading</Link>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#opportunities" className="transition hover:text-[#f4d678]">Opportunities</a>
            <a href="#approach" className="transition hover:text-[#f4d678]">Our approach</a>
            <a href="#faq" className="transition hover:text-[#f4d678]">FAQ</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link to={ROUTES.LOGIN} className="px-4 py-2 text-sm text-white/75 transition hover:text-white">Sign in</Link>
            <Link to={ROUTES.SIGNUP} className="rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] transition hover:bg-[#f4d678]">Create account</Link>
          </div>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen ? (
          <div className="border-t border-white/10 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/75">
              <a href="#opportunities" onClick={() => setMenuOpen(false)}>Opportunities</a>
              <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <Link to={ROUTES.LOGIN}>Sign in</Link>
              <Link to={ROUTES.SIGNUP} className="w-fit rounded-full bg-[#d4af37] px-5 py-2.5 font-semibold text-[#0b0b0b]">Create account</Link>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative flex min-h-[760px] items-center overflow-hidden px-6 pb-20 pt-36 lg:px-10">
        <img src={heroTrading} alt="Trader reviewing market charts" className="absolute inset-0 h-full w-full object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0b0b_10%,rgba(11,11,11,0.76)_48%,rgba(11,11,11,0.22)),linear-gradient(0deg,#0b0b0b,transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Invest with intention</p>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-8xl">Your next chapter starts with a <span className="text-[#d4af37]">clearer view.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">Salwa Trading gives you a straightforward way to explore opportunities, track your progress, and make more informed decisions about your capital.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to={ROUTES.SIGNUP} className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 font-semibold text-[#0b0b0b] transition hover:bg-[#f4d678]">Start investing <ArrowRight className="h-4 w-4" /></Link>
              <Link to={ROUTES.LOGIN} className="rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-[#d4af37] hover:text-[#f4d678]">Sign in</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-white/[0.04] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-6"><span className="text-sm text-white/50">Portfolio overview</span><BarChart3 className="text-[#d4af37]" /></div>
              <div className="py-10"><p className="text-sm text-white/50">Build with perspective</p><p className="mt-3 font-display text-5xl text-[#f4d678]">3 sectors</p><p className="mt-2 text-sm text-white/50">designed for considered decisions</p></div>
              <div className="space-y-3">{["Global markets", "Real assets", "Healthcare"].map((item) => <div key={item} className="flex items-center justify-between rounded-xl bg-white/[0.05] px-4 py-3 text-sm"><span>{item}</span><Check className="h-4 w-4 text-[#d4af37]" /></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="opportunities" className="border-t border-white/10 px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Explore opportunities</p><h2 className="mt-4 max-w-2xl font-display text-4xl sm:text-5xl">Different sectors. One considered experience.</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{opportunities.map(({ title, description, icon: Icon, route }) => <Link key={title} to={route} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#d4af37]/50"><Icon className="h-8 w-8 text-[#d4af37]" /><h3 className="mt-14 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-white/55">{description}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37]">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>)}</div></div></section>

      <section className="border-t border-white/10 bg-[#0f0f0f] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Read the market</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Perspective before the next move.</h2><p className="mt-6 max-w-md leading-8 text-white/55">Strong decisions begin with context. Explore the visual language of markets, from price movement to the people and tools behind every considered strategy.</p><Link to={ROUTES.LOGIN} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f4d678]">Open your account <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-4 sm:grid-cols-2"><div className="group relative overflow-hidden rounded-3xl border border-white/10 sm:row-span-2"><img src={businessmanTrading} alt="Professional studying trading markets" className="h-full min-h-80 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20"><p className="text-sm font-semibold text-white">A disciplined view</p><p className="mt-1 text-xs text-white/60">Research, focus and timing</p></div></div><div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#171717]"><img src={candleStick} alt="Candlestick market chart" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#171717]"><img src={tabTrading} alt="Trading analysis dashboard" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" /></div></div></div><div className="mt-5 overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-[#171717]"><img src={tradingChart} alt="Trading performance chart" className="h-64 w-full object-cover object-center sm:h-80" /></div></div></section>

      <section id="approach" className="bg-[#151515] px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">The Salwa approach</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Clarity is part of the investment.</h2><p className="mt-6 max-w-xl leading-8 text-white/55">We keep the experience focused, so you can spend less time navigating and more time understanding where your money is going.</p></div><div className="space-y-5">{benefits.map((benefit, index) => <div key={benefit} className="flex gap-4 border-b border-white/10 pb-5"><span className="font-display text-2xl text-[#d4af37]">0{index + 1}</span><span className="pt-1 text-lg text-white/80">{benefit}</span></div>)}</div></div></section>

      <section className="border-t border-white/10 px-6 py-24 lg:px-10"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Inside the platform</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Everything important, in view.</h2><p className="mt-5 leading-7 text-white/55">Track your opportunities and account activity through a focused experience built for confident decisions.</p></div><div className="mt-12 overflow-hidden rounded-[2rem] border border-[#d4af37]/25 bg-white/[0.03] p-3 shadow-2xl shadow-black/40"><img src={platformPreview} alt="Salwa Trading platform preview" className="h-auto w-full rounded-[1.5rem] object-cover" /></div></div></section>

      <section className="bg-[#151515] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Member perspective</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Built to feel clear.</h2></div><p className="max-w-sm text-sm leading-7 text-white/45">A simpler experience helps people stay focused on the decisions that matter.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{["The platform makes it easier to understand where I stand and what to explore next.", "I appreciate having different opportunities presented in one calm, focused experience.", "The account view gives me the confidence to keep track of my activity over time."].map((quote, index) => <article key={quote} className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-6"><img src={testimonialImage} alt="Salwa Trading member" className="h-16 w-16 rounded-full object-cover" /><p className="mt-6 leading-7 text-white/70">“{quote}”</p><p className="mt-6 text-sm font-semibold text-[#f4d678]">Salwa Trading member {index + 1}</p></article>)}</div></div></section>

      <section id="faq" className="px-6 py-24 lg:px-10"><div className="mx-auto max-w-3xl"><p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Questions, answered</p><h2 className="mt-4 text-center font-display text-4xl sm:text-5xl">A clearer place to begin.</h2><Accordion type="single" collapsible defaultValue="item-1" className="mt-10">{["What is Salwa Trading?", "Can I monitor my investment activity?", "How do I get started?"].map((question, index) => <AccordionItem key={question} value={`item-${index + 1}`}><AccordionTrigger className="py-6 text-left text-base text-white hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-7 text-white/55">Salwa Trading provides a structured environment to explore opportunities and monitor your account. Create an account to see the available next steps.</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <LandingFooter />
    </main>
  );
};

export default LandingPage;