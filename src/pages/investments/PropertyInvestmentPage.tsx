import React, { useState } from "react";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Home,
  Layers,
  LayoutGrid,
  ListChecks,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import propertyLanding from "../../assets/propertyLanding.jpg";
import homePool from "../../assets/homePool.jpg";
import HomeOne from "../../assets/HomeOne.jpg";
import homehills from "../../assets/homehills.jpg";
import homeFour from "../../assets/homeFour.jpg";
import { ROUTES } from "../../app-routes/constants";
import { useNavigate } from "react-router-dom";

const overviewCards = [
  {
    title: "Real Estate Assets",
    description: "Explore opportunities connected to residential, commercial and other property assets.",
    icon: Building2,
  },
  {
    title: "Long-Term Potential",
    description: "Property can play an important role in long-term wealth-building strategies.",
    icon: Clock3,
  },
  {
    title: "Property Development",
    description: "Participate in opportunities connected to developing and improving real estate assets.",
    icon: Layers,
  },
  {
    title: "Diversification",
    description: "Real estate can provide another asset class within a broader investment strategy.",
    icon: LayoutGrid,
  },
];

const whyCards = [
  {
    title: "Real Assets",
    description: "Property represents a tangible asset with practical use and economic value.",
    icon: Building2,
  },
  {
    title: "Long-Term Perspective",
    description: "Real estate is commonly considered with a long-term investment perspective.",
    icon: Clock3,
  },
  {
    title: "Rental Opportunities",
    description: "Certain property investments may generate income through rental activity, depending on the property and applicable terms.",
    icon: Home,
  },
  {
    title: "Property Development",
    description: "Development projects can create opportunities by improving, constructing or transforming real estate.",
    icon: Layers,
  },
  {
    title: "Market Demand",
    description: "Residential and commercial properties serve important housing and business needs.",
    icon: Globe2,
  },
  {
    title: "Portfolio Diversification",
    description: "Property can complement other asset classes within a diversified investment approach.",
    icon: LayoutGrid,
  },
];

const propertyTypes = [
  {
    title: "Residential Property",
    description: "Residential real estate includes homes, apartments and other properties designed for living.",
    image: homePool,
  },
  {
    title: "Commercial Property",
    description: "Commercial properties support businesses, offices, retail activities and other commercial uses.",
    image: homeFour,
  },
  {
    title: "Development Projects",
    description: "Development opportunities can involve construction, renovation and improvement of real estate assets.",
    image: HomeOne,
  },
  {
    title: "Premium Properties",
    description: "High-quality properties can provide opportunities connected to desirable locations, design and long-term asset value.",
    image: homehills,
  },
];

// const developmentFeatures = [
//   {
//     title: "Construction",
//     description: "Planning and building form the foundation of property development projects.",
//     icon: CheckCircle2,
//   },
//   {
//     title: "Location",
//     description: "Site selection and location are key to property opportunity and long-term use.",
//     icon: MapPin,
//   },
//   {
//     title: "Property Design",
//     description: "Thoughtful architecture and design support modern property value and appeal.",
//     icon: Sparkles,
//   },
//   {
//     title: "Asset Development",
//     description: "Improving real estate assets can create new opportunity and potential value.",
//     icon: Layers,
//   },
// ];

const valueCards = [
  {
    title: "Property Appreciation",
    description: "Property values can increase or decrease depending on location, demand, market conditions and other factors.",
    icon: BarChart3,
  },
  {
    title: "Rental Income",
    description: "Some properties may generate rental income when leased to tenants, subject to occupancy and applicable costs.",
    icon: Home,
  },
  {
    title: "Development Value",
    description: "Improvements and development can potentially increase the usefulness and value of a property.",
    icon: Layers,
  },
  {
    title: "Market Demand",
    description: "Demand from residents, businesses and investors can influence property markets.",
    icon: Globe2,
  },
];

const experienceFeatures = [
  {
    title: "Clear Information",
    description: "Review important information about available investment opportunities.",
    icon: ListChecks,
  },
  {
    title: "Easy Investment Process",
    description: "Complete your investment request through a simple account experience.",
    icon: CheckCircle2,
  },
  {
    title: "Investment Tracking",
    description: "Keep track of your investment activity through your dashboard.",
    icon: BarChart3,
  },
  {
    title: "Account Support",
    description: "Get assistance when you need help with your account or investment process.",
    icon: ShieldCheck,
  },
];

const faqItems = [
  {
    question: "What is Property Investment?",
    answer: "Property investment involves investing capital into real estate opportunities such as residential properties, commercial properties or development projects.",
  },
  {
    question: "What types of properties can I invest in?",
    answer: "Opportunities may include residential, commercial, development and other real-estate-related assets depending on the available investment options.",
  },
  {
    question: "Can property investment generate income?",
    answer: "Some properties may generate income through rental activity or other applicable sources, but income is not guaranteed.",
  },
  {
    question: "Can property values increase?",
    answer: "Property values can increase or decrease depending on location, demand, economic conditions and other market factors.",
  },
  {
    question: "How do I start?",
    answer: "Review the available property investment opportunities and select an option that fits your investment goals and risk tolerance.",
  },
  {
    question: "Can I track my investment?",
    answer: "Yes. Investment activity can be monitored through your Salwa Trading dashboard.",
  },
  {
    question: "Is property investment risk-free?",
    answer: "No. Property investment involves risks including market risk, property-specific risk, liquidity risk and other factors.",
  },
];

const PropertyInvestmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
    const navigate = useNavigate();

   const handleExploreInvestment = () => {
      navigate(ROUTES.PACKAGES);
    };

  return (
    <div className="space-y-12 pb-10">
      <section className="relative overflow-hidden rounded-[2rem]">
        <img src={propertyLanding} alt="Property investment hero" className="h-[700px] w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,0.86)_0%,rgba(11,15,20,0.5)_45%,rgba(11,15,20,0.9)_100%)]" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center sm:px-8 lg:px-10">
          <div className="relative z-10 mx-auto max-w-4xl rounded-[2rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Real Estate & Property Investment</p>
            <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Property Investment</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              Build long-term value through real estate. Explore property investment opportunities connected to residential, commercial and development-focused real estate while building exposure to one of the world&apos;s most established investment sectors.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="cursor-pointer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.24)]" onClick={handleExploreInvestment}>
                Start Investing
              </button>
              <button className="cursor-pointer inline-flex items-center justify-center rounded-full border border-gray-700 bg-[#0f1724]/80 px-8 py-3 text-sm font-semibold text-gray-200 transition duration-300 hover:border-yellow-500/40 hover:text-white">
                Explore Properties
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-400">Real Estate • Long-Term Value • Property Opportunities</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Property Investment Overview</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Invest in Property. Build Long-Term Value.</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
            <p>
              Real estate has long been an important part of diversified investment strategies. Property can provide opportunities connected to ownership, development, rental activity and long-term asset value.
            </p>
            <p>
              Salwa Property Investment gives users an accessible way to explore property-focused investment opportunities through a structured digital experience.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-yellow-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
          <img src={homePool} alt="Property investment image" className="h-[520px] w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,0.88)_0%,rgba(11,15,20,0.45)_35%,rgba(11,15,20,0.9)_100%)]" />
          <div className="absolute inset-0 flex items-center justify-center px-6 py-16 text-center">
            <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 p-10 ">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Real Assets. Real Opportunities.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Property investment connects capital with physical assets such as residential buildings, commercial spaces and development projects.
              </p>
              <button className="cursor-pointer mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.24)]" onClick={handleExploreInvestment}>
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Why Property Investment?</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Why Consider Property Investment?</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-yellow-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Explore Different Property Opportunities</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Explore Different Property Opportunities</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {propertyTypes.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724] shadow-[0_0_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1118]/90 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{item.description}</p>
                <button className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.24)]">
                  Explore Opportunity
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">How Property Investment Works</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">How Property Investment Works</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Explore",
                description: "Review available property investment opportunities and understand their objectives.",
              },
              {
                title: "Choose",
                description: "Select an investment opportunity that matches your goals and risk tolerance.",
              },
              {
                title: "Invest",
                description: "Complete the investment process through your Salwa account.",
              },
              {
                title: "Track",
                description: "Monitor your investment activity and status through your dashboard.",
              },
            ].map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/20 bg-[#151515] text-lg font-semibold text-yellow-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
          <img src={HomeOne} alt="Property development image" className="h-[520px] w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,0.9)_0%,rgba(11,15,20,0.55)_35%,rgba(11,15,20,0.94)_100%)]" />
          <div className="absolute inset-0 flex items-center justify-center px-6 py-16 text-center">
            <div className="p-3 w-full max-w-3xl rounded-[2rem] border border-white/10">
              <p className="p-3text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Investing in Property Development</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Investing in Property Development</h2>
              <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
                Property development brings together land, construction, architecture, planning and investment capital to create or improve real estate assets.
              </p>
              <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
                Development projects can range from residential communities and apartment buildings to commercial spaces and mixed-use developments.
              </p>
              {/* <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {developmentFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-yellow-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-400">{feature.description}</p>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Where Property Value Can Come From</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Where Property Value Can Come From</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-yellow-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">A Simple Property Investment Experience</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A Simple Property Investment Experience</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experienceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 text-yellow-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Why Real Estate Remains Important</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Why Real Estate Remains Important</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Residential",
                description: "Homes and living spaces serving growing communities.",
              },
              {
                title: "Commercial",
                description: "Properties supporting businesses and commercial activity.",
              },
              {
                title: "Development",
                description: "Projects that create, improve or transform real estate assets.",
              },
            ].map((area) => (
              <div key={area.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#0f1724] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.95fr] xl:grid-cols-[0.95fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Put Your Capital Into Real Assets</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Put Your Capital Into Real Assets</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-300">
                <p>
                  Property investment can provide exposure to physical assets and may offer opportunities for long-term value creation depending on market conditions, property performance and investment structure.
                </p>
                <p>
                  Investors should evaluate each opportunity carefully and understand that property values and income can change over time.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-yellow-500/20 bg-[#111827] p-8 shadow-[0_0_30px_rgba(212,175,55,0.14)]">
              <div className="rounded-3xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 p-6">
                <h3 className="text-xl font-semibold text-white">Potential for Long-Term Value</h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Explore property opportunities designed around real assets and long-term investment perspectives.
                </p>
                <button className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.24)]">
                  Explore Investment Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-[#0f1724] p-8 sm:p-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Property Investment Risk Notice</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Property Investment Risk Notice</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-300">
              <p>
                Property investment involves risk. Property values can increase or decrease depending on market conditions, location, economic factors, demand and other circumstances.
              </p>
              <p>
                Rental income may vary and properties can involve maintenance, vacancy, development, financing and other costs.
              </p>
              <p>
                Investors should carefully review the terms of each opportunity and consider their financial circumstances before investing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Frequently Asked Questions</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-8 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item?.question} className="overflow-hidden rounded-3xl border cursor-p border-gray-800 bg-[#0f1724]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex cursor-pointer w-full items-center justify-between gap-4 px-6 py-5 text-left text-white transition hover:bg-[#111827]"
                  >
                    <span className="text-base font-semibold">{item.question}</span>
                    <span className="text-yellow-300">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className="border-t border-gray-800 px-6 py-5 text-sm leading-7 text-gray-400">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
          <img src={homehills} alt="Property final CTA background" className="h-[520px] w-full object-cover object-center" />
          <div className="absolute inset-0 de" />
          <div className="absolute inset-0 flex items-center justify-center px-6 py-16 text-center">
            <div className="w-full max-w-3xl rounded-[2rem] border border-white/10  p-10 ">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to Explore Property Investment?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white sm:text-lg">
                Discover real estate investment opportunities with Salwa and take the next step toward building exposure to real assets.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="cursor-pointer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.24)]" onClick={handleExploreInvestment}>
                  Start Investing
                </button>
                <button className="cursor-pointer inline-flex items-center justify-center rounded-full border border-gray-700 bg-[#0f1724]/80 px-8 py-3 text-sm font-semibold text-gray-200 transition duration-300 hover:border-yellow-500/40 hover:text-white">
                  Back to Dashboard
                </button>
              </div>
              <p className="mt-6 text-sm text-white">Invest responsibly. Understand the risks. Make informed decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInvestmentPage;
