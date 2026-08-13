import React, { useState } from "react";
import {
  BarChart3,
  BookOpen,
  ChartLine,
  CircleDot,
  Compass,
  Cpu,
  LayoutGrid,
  Shield,
  Sparkles,
  TrendingUp,
  Wallet,
  Activity,
  Zap,
} from "lucide-react";
import tradingLandingPic from "../../assets/tradingLandingPic.jpg";
import TradingChartHero from "../../assets/TradingChartHero.jpg";
// import tradingChart from "../../assets/TradingChart.jpg";
import tradingGraph from "../../assets/tradingGraph.jpg";
import UnlockTrading from "../../assets/UnlockTrading.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-routes/constants";

const introCards = [
  {
    title: "Global Markets",
    description: "Explore opportunities connected to international financial markets.",
    icon: GlobalIcon,
  },
  {
    title: "Market Analysis",
    description: "Trading decisions can be supported by structured market research and analysis.",
    icon: ChartLine,
  },
  {
    title: "Investment Growth",
    description: "Participate in trading opportunities with a focus on long-term account growth.",
    icon: TrendingUp,
  },
];

const whyCards = [
  {
    title: "Global Market Access",
    description: "Trading connects investors with opportunities across international financial markets.",
    icon: Compass,
  },
  {
    title: "Professional Approach",
    description: "Market activity can be approached through research, analysis and disciplined strategies.",
    icon: Shield,
  },
  {
    title: "Multiple Markets",
    description: "Financial trading can involve currencies, commodities, indices and other market instruments.",
    icon: LayoutGrid,
  },
  {
    title: "Market Analysis",
    description: "Understanding market trends and price movements is an important part of trading.",
    icon: BarChart3,
  },
  // {
  //   title: "Flexible Opportunities",
  //   description: "Market opportunities can develop across different trading sessions and market conditions.",
  //   icon: Zap,
  // },
  // {
  //   title: "Account Tracking",
  //   description: "Keep track of your investment activity through your Salwa Trading account.",
  //   icon: Wallet,
  // },
];

const steps = [
  {
    title: "Choose Your Investment",
    description: "Explore the available trading investment options and select the one that matches your goals.",
  },
  {
    title: "Make Your Investment",
    description: "Complete the investment process through your Salwa Trading account.",
  },
  {
    title: "Trading Activity",
    description: "Your investment participates in the applicable trading strategy and market activity.",
  },
  {
    title: "Track Your Progress",
    description: "Monitor your investment status and account activity through your dashboard.",
  },
];

const strategyPoints = [
  {
    title: "Market Research",
    description: "Evaluate market conditions and trading signals with an informed perspective.",
    icon: BookOpen,
  },
  {
    title: "Trend Analysis",
    description: "Identify price direction and momentum across major market instruments.",
    icon: Activity,
  },
  {
    title: "Risk Awareness",
    description: "Maintain awareness of market risk and trading exposure at every stage.",
    icon: Shield,
  },
  {
    title: "Disciplined Execution",
    description: "Structured decision-making supports consistency and clarity during active market periods.",
    icon: Sparkles,
  },
];

const expectations = [
  {
    title: "Transparent Information",
    description: "Clear information about available investment opportunities.",
  },
  {
    title: "Simple Experience",
    description: "An easy-to-understand investment experience through your Salwa account.",
  },
  {
    title: "Trading-Focused Approach",
    description: "A platform focused on financial market opportunities.",
  },
  {
    title: "Account Visibility",
    description: "Monitor your investment activity from your dashboard.",
  },
  {
    title: "Customer Support",
    description: "Access support when you need assistance with your account.",
  },
];

const marketCards = [
  {
    title: "Forex",
    description: "Currency markets provide opportunities based on movements between global currencies.",
    icon: CircleDot,
  },
  {
    title: "Commodities",
    description: "Markets such as gold and other commodities can provide additional trading opportunities.",
    icon: Cpu,
  },
  {
    title: "Indices",
    description: "Market indices represent groups of companies and broader market movements.",
    icon: ChartLine,
  },
  {
    title: "Global Markets",
    description: "International markets provide opportunities across different regions and trading sessions.",
    icon: GlobeIcon,
  },
];

const faqItems = [
  {
    question: "What is Trading Investment?",
    answer: "Trading Investment allows users to participate in opportunities connected to financial markets through a structured investment approach.",
  },
  {
    question: "What markets are involved?",
    answer: "Trading opportunities may involve markets such as forex, commodities, indices and other financial instruments depending on the applicable strategy.",
  },
  {
    question: "How can I start investing?",
    answer: "Review the available investment options and choose an option that matches your investment goals and risk tolerance.",
  },
  {
    question: "Can I earn from trading investment?",
    answer: "Trading may generate returns when market conditions and applicable strategies perform favorably, but returns are never guaranteed.",
  },
  {
    question: "Can I track my investment?",
    answer: "Yes. Investment activity and account information can be monitored through your Salwa Trading dashboard.",
  },
  {
    question: "Is trading risk-free?",
    answer: "No. Trading involves financial risk and investment values can increase or decrease.",
  },
];

function GlobalIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Compass {...props} />;
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return <CircleDot {...props} />;
}

const TradingInvestmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
   const navigate = useNavigate();

   const handleExploreInvestment = () => {
      navigate(ROUTES.PACKAGES);
    };

  return (
    <div className="space-y-10 pb-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-[#0f1724] shadow-[0_0_40px_rgba(0,0,0,0.28)]">
        <img src={tradingLandingPic} alt="Trading investment hero" className="h-[620px] w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1118]/70 via-[#0b1118]/40 to-[#0b1118]/90" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center sm:px-8 lg:px-10">
          <div className="relative z-10 mx-auto max-w-4xl rounded-lg">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-500/20 bg-[#151515]/85 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
                Global Trading & Investment
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Trading Investment
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
                Access a professionally structured trading investment opportunity designed for users who want to participate in global financial markets without managing every trading decision themselves.
              </p>
              <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="cursor-pointer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.24)]"onClick={handleExploreInvestment}>
                  Start Investing
                </button>
                <button className="cursor-pointer inline-flex items-center justify-center rounded-full border border-gray-700 bg-[#0f1724]/80 px-8 py-3 text-sm font-semibold text-gray-200 transition duration-300 hover:border-yellow-500/40 hover:text-white">
                  Explore Trading
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Market-focused • Transparent information • Professional trading approach
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Invest in Global Trading Opportunities</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Invest in Global Trading Opportunities</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Financial markets operate around the clock across currencies, commodities, indices and other instruments. Trading creates opportunities by analyzing market movements and identifying potential entry and exit points.
              </p>
              <p>
                Salwa Trading provides users with a structured environment to explore trading investment opportunities while keeping the experience simple and accessible.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {introCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#B8860B]/10 text-yellow-300">
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
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Why Choose Trading Investment?</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Why Choose Trading Investment?</h2>
              <p className="mt-4 text-base leading-8 text-gray-300">
                A premium trading experience is built on market awareness, disciplined execution and transparent account visibility.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
              {whyCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#B8860B]/10 text-yellow-300">
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
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#0f1724] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">How Trading Investment Works</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">How Trading Investment Works</h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-gray-800 bg-[#111827] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/20 bg-[#0f1724] text-lg font-semibold text-yellow-300">
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
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Focused on Smarter Market Decisions</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Focused on Smarter Market Decisions</h2>
            <p className="mt-5 text-base leading-8 text-gray-300">
              Successful trading requires research, market observation, risk awareness and disciplined decision-making. A structured approach helps reduce emotional decisions and provides a clearer framework for participating in financial markets.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strategyPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#B8860B]/10 text-yellow-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-800 bg-[#0f1724]">
            <img src={tradingGraph} alt="Trading strategy image" className="h-full min-h-[360px] w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1118]/95 via-[#0b1118]/40 to-[#0b1118]/95" />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="max-w-md rounded-[2rem] border border-white/10 p-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Insight in Every Move</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Premium market clarity</h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  A premium trading experience is built on sharp market insight, clear positioning, and the confidence to act when opportunity appears.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">What You Can Expect</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">What You Can Expect</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expectations.map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#0f1724] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.95fr] xl:grid-cols-[0.95fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Put Your Capital to Work</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Put Your Capital to Work</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-gray-300">
                <p>
                  Trading investment allows your capital to participate in financial market opportunities. When market conditions and trading strategies perform favorably, investment activity may generate returns.
                </p>
                <p>
                  However, financial markets are unpredictable and returns are never guaranteed. Investors should understand the risks before committing funds.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-800 bg-[#111827] p-6 sm:p-8">
              <div className="rounded-3xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 p-6 shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                <div className="flex items-center gap-3 text-yellow-300">
                  <TrendingUp className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-white">Potential for Growth</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Participate in market opportunities while monitoring your investment through your Salwa Trading account.
                </p>
                <button className="cursor-pointer mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.24)]" onClick={handleExploreInvestment}>
                  Explore Investment Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Markets & Opportunities</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Markets & Opportunities</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {marketCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-3xl border border-gray-800 bg-[#0f1724] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/15 to-[#B8860B]/10 text-yellow-300">
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
        <div className="rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-[#0f1724] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Trading Risk Notice</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trading Risk Notice</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-gray-300">
              <p>
                Trading and investment activities involve risk. Market prices can move rapidly and investment values may increase or decrease.
              </p>
              <p>
                Past performance does not guarantee future results. Investors should carefully evaluate their financial situation, understand the associated risks and invest only according to their own circumstances and risk tolerance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-[2rem] border border-gray-800 bg-[#111827] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Frequently Asked Questions</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question} className="rounded-3xl border border-gray-800 bg-[#0f1724]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-white">{item.question}</span>
                    <span className="text-yellow-300">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <p className="px-6 pb-5 text-sm leading-7 text-gray-400">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
      
           <div className=" mt-11 mx-auto max-w-5xl overflow-hidden rounded-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Trading Opportunity</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready to Explore Trading Opportunities?</h2>
              <p className="mx-auto max-w-5xl text-base leading-8 text-gray-300 sm:text-lg">
                Discover trading investment opportunities with Salwa Trading and take the next step toward putting your capital to work in global financial markets.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className=" cursor-pointer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.24)]" onClick={handleExploreInvestment}>
                  Start Investing
                </button>
                <button className="cursor-pointer inline-flex items-center justify-center rounded-full border border-gray-700 bg-[#0f1724]/80 px-8 py-3 text-sm font-semibold text-gray-200 transition duration-300 hover:border-yellow-500/40 hover:text-white">
                  Back to Dashboard
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-400 text-center">
                Invest responsibly. Understand the risks. Make informed decisions.
              </p>
            </div>  
      </div>
    </div>
  );
};

export default TradingInvestmentPage;
