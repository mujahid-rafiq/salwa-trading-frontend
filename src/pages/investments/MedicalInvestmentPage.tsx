import React, { useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-routes/constants";
import landingImage from "../../assets/medicaleLandingPic.jpg";
import centerImage from "../../assets/centerImage.jpg";
import insideOne from "../../assets/insideUseOne.jpg";
import insideTwo from "../../assets/InsideUSeTwo.jpg";
import insideThree from "../../assets/insideUseThree.jpg";

const overviewCards = [
  {
    title: "Healthcare Sector",
    description: "Exposure to one of the world's most essential industries.",
    icon: HeartPulse,
  },
  {
    title: "Pharmaceutical Manufacturing",
    description: "Focus on medicine production and pharmaceutical operations.",
    icon: FlaskConical,
  },
  {
    title: "Healthcare Innovation",
    description: "Technology and innovation continue to transform healthcare.",
    icon: Microscope,
  },
  {
    title: "Long-Term Sector",
    description: "Healthcare remains an important long-term economic sector.",
    icon: Building2,
  },
];

const featurePoints = [
  {
    title: "Growing healthcare needs",
    description: "Healthcare demand continues to support pharmaceutical and medical industries.",
  },
  {
    title: "Medicine manufacturing",
    description: "Modern manufacturing enables the production of essential medicines and healthcare products.",
  },
  {
    title: "Healthcare innovation",
    description: "Technology and research continue to create new possibilities across healthcare.",
  },
  {
    title: "Industry diversification",
    description: "The healthcare ecosystem includes multiple interconnected areas and business opportunities.",
  },
  {
    title: "Global demand",
    description: "Healthcare products and services are required across markets worldwide.",
  },
];

const manufacturingCards = [
  {
    title: "Research & Development",
    description: "Scientific work that supports new medical solutions and pharmaceutical development.",
  },
  {
    title: "Manufacturing",
    description: "Production processes and specialized systems that support medicine creation.",
  },
  {
    title: "Quality & Compliance",
    description: "Quality systems and regulated processes help maintain high standards.",
  },
];

const focusCards = [
  {
    title: "Medicine Production",
    description: "Opportunities connected to pharmaceutical medicine production.",
    icon: Stethoscope,
  },
  {
    title: "Pharmaceutical Technology",
    description: "Technology that supports modern pharmaceutical operations.",
    icon: Activity,
  },
  {
    title: "Healthcare Innovation",
    description: "Emerging solutions designed to improve healthcare.",
    icon: Microscope,
  },
  {
    title: "Research & Development",
    description: "Scientific research supporting new medicines and healthcare solutions.",
    icon: FlaskConical,
  },
  {
    title: "Medical Products",
    description: "Products and solutions serving healthcare requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Healthcare Infrastructure",
    description: "Systems and infrastructure supporting the broader healthcare ecosystem.",
    icon: Building2,
  },
];

const steps = [
  {
    title: "Explore",
    description: "Review the available medical investment opportunity and understand its focus.",
  },
  {
    title: "Choose",
    description: "Select an investment option according to your goals and available options.",
  },
  {
    title: "Submit",
    description: "Complete the investment request and provide the required information.",
  },
  {
    title: "Track",
    description: "Monitor your investment activity and status through your Salwa dashboard.",
  },
];

const faqItems = [
  {
    question: "What is Medical Investment?",
    answer:
      "Medical Investment refers to opportunities connected with the broader healthcare and pharmaceutical sector, including areas such as medicine manufacturing, healthcare technology and pharmaceutical innovation.",
  },
  {
    question: "What does the medical investment focus on?",
    answer: "The focus is on opportunities connected to the pharmaceutical and healthcare ecosystem.",
  },
  {
    question: "How can I start?",
    answer: "Review the available investment options and follow the investment process provided through your Salwa account.",
  },
  {
    question: "How can I track my investment?",
    answer: "Investment activity can be monitored through your Salwa dashboard.",
  },
  {
    question: "Can I withdraw my investment?",
    answer: "Withdrawal availability depends on the applicable investment terms and conditions.",
  },
  {
    question: "Are returns guaranteed?",
    answer: "No. Investment returns are not guaranteed and all investments involve risk.",
  },
  {
    question: "What risks should I consider?",
    answer: "Investors should consider market conditions, business risks, liquidity and other factors that may affect investment performance.",
  },
];

const MedicalInvestmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();
  const faqRef = useRef<HTMLDivElement | null>(null);

  const handleLearnMore = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleExploreInvestment = () => {
    navigate(ROUTES.PACKAGES);
  };

  const handleBottomStart = () => {
    navigate(ROUTES.PACKAGES);
  };

  const handleBottomDashboard = () => {
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="space-y-8 pb-10">
      <section className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-[#0f1724] shadow-[0_0_60px_rgba(0,0,0,0.35)]">
        <div className="relative isolate min-h-[480px] w-full overflow-hidden">
          <img src={landingImage} alt="Medical and pharmaceutical manufacturing" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,12,0.95)_0%,rgba(5,8,12,0.7)_50%,rgba(5,8,12,0.55)_100%)]" />
          <div className="relative z-10 flex min-h-[480px] items-center px-6 py-12 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-[#151515]/80 px-4 py-2 text-sm font-medium text-yellow-300">
                <BadgeCheck className="h-4 w-4" />
                Healthcare & Pharmaceutical Sector
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Medical Investment
              </h1>
              <p className="mt-4 text-xl font-semibold text-yellow-200">Invest in the Future of Healthcare</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Explore investment opportunities connected to pharmaceutical manufacturing, healthcare innovation and the growing global demand for medical products.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleExploreInvestment}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01] hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
                >
                  Explore Investment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  onClick={handleLearnMore}
                  className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-[#0f1724]/70 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-yellow-500/40 hover:text-white"
                >
                  Learn More
                </button>
              </div>
              <p className="mt-5 text-sm text-gray-400">
                Focused on healthcare, pharmaceutical manufacturing and long-term sector opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-gray-800 bg-[#111827] p-6 sm:p-8 lg:p-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Medical Investment Overview</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A sector shaped by essential needs and continuous development</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-gray-300">
            <p>
              The healthcare and pharmaceutical industry plays an essential role in modern society. From medicine manufacturing and pharmaceutical research to healthcare technology and medical innovation, the sector continues to evolve as global healthcare needs grow.
            </p>
            <p>
              Medical Investment provides exposure to opportunities connected with this broad and essential industry while allowing investors to explore a sector supported by ongoing healthcare demand and technological development.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-800 bg-[#0f1724] p-5 transition hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-yellow-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{card.description}</p>
                <div className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">Area {index + 1}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
          <img src={insideOne} alt="Medical investment environment" className="h-full min-h-[280px] w-full object-cover" />
        </div>
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Why Medical Investment?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">A sector connected to everyday life and long-term industry needs</h2>
          <p className="mt-4 text-base leading-8 text-gray-300">
            The pharmaceutical and healthcare ecosystem includes medicine manufacturing, research and development, medical technology and healthcare services. These areas are closely connected to the everyday needs of people around the world.
          </p>
          <div className="mt-6 space-y-3">
            {featurePoints.map((point) => (
              <div key={point.title} className="rounded-xl border border-gray-800 bg-[#0f1724] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-300">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{point.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-400">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
        <img src={centerImage} alt="Medical investment center image" className="w-full object-cover" />
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Pharmaceutical Manufacturing</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Precision, regulation and innovation working together</h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-gray-300">
            <p>
              Pharmaceutical manufacturing combines advanced technology, scientific research and controlled production processes to create medicines and healthcare products.
            </p>
            <p>
              Modern pharmaceutical facilities use specialized equipment, quality-control systems and highly regulated production environments to maintain consistent standards throughout the manufacturing process.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {manufacturingCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4">
                <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
          <img src={insideTwo} alt="Pharmaceutical production facility" className="h-full min-h-[320px] w-full object-cover" />
        </div>
      </section>

      <section className="rounded-[2rem] border border-gray-800 bg-[#111827] p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Medical Investment Focus</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">A broad and interconnected healthcare investment landscape</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {focusCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-2xl border border-gray-800 bg-[#0f1724] p-5 transition hover:-translate-y-1 hover:border-yellow-500/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-yellow-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[2rem] border border-gray-800 bg-[#0f1724] p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">How Medical Investment Works</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">A clear process from exploration to tracking</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-gray-800 bg-[#111827] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-sm font-semibold text-yellow-200">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
          <img src={insideThree} alt="Medical and technology industry overview" className="h-full min-h-[300px] w-full object-cover" />
        </div>
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Medical Industry</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">An industry built around essential needs</h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-gray-300">
            <p>
              Healthcare is an essential part of modern life. Pharmaceutical companies, medical manufacturers, researchers and healthcare technology providers work together to develop products and solutions that support people around the world.
            </p>
            <p>
              From medicine production to advanced healthcare technologies, the industry continues to develop alongside scientific progress and changing healthcare requirements.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Medicine", text: "Essential products and pharmaceutical development" },
              { label: "Technology", text: "Medical and digital systems supporting care" },
              { label: "Innovation", text: "Research-driven progress and new solutions" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-800 bg-[#0f1724] p-4">
                <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-gray-800 bg-[#111827] p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Key Features</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Professional tools for a structured investment experience</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Professional Investment Experience",
            "Healthcare Sector Exposure",
            "Transparent Investment Information",
            "Secure Account Management",
            "Investment Tracking",
            "Dedicated Customer Support",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-[#0f1724] p-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-300">
                <BadgeCheck className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-gray-200">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-[#0f1724] p-6 sm:p-8 lg:p-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Investment Risk Notice</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Please review all information carefully</h2>
          <p className="mt-4 text-base leading-8 text-gray-300">
            All investments involve risk. The value of an investment can increase or decrease, and past performance does not guarantee future results.
          </p>
          <p className="mt-3 text-base leading-8 text-gray-300">
            Investors should carefully review all available information, understand the associated risks and consider their individual financial circumstances before making an investment decision.
          </p>
        </div>
      </section>

      <section ref={faqRef} className="rounded-[2rem] border border-gray-800 bg-[#111827] p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Frequently Asked Questions</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Common questions about medical investment</h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={item.question} className="rounded-2xl border border-gray-800 bg-[#0f1724]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-white">{item.question}</span>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-yellow-300" /> : <ChevronDown className="h-5 w-5 text-yellow-300" />}
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-gray-400">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 p-8 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Explore Medical Investment</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Discover opportunities within the healthcare and pharmaceutical sector</h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              Discover opportunities within the healthcare and pharmaceutical sector and choose an option that fits your investment goals.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleBottomStart}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Start Investing
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={handleBottomDashboard}
              className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-[#0f1724]/70 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-yellow-500/40 hover:text-white"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalInvestmentPage;
