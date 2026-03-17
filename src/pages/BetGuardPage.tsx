import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Heart, Eye, ArrowRight, RotateCcw, Clock, DollarSign, BookOpen, Phone, X, ExternalLink, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { jsPDF } from "jspdf";

// --- Data ---

interface Question {
  id: number;
  text: string;
  answers: string[];
}

const questions: Question[] = [
  { id: 1, text: "How often do you gamble?", answers: ["Never", "Occasionally (1–2 times/week)", "Frequently (3–5 times/week)", "Daily"] },
  { id: 2, text: "How much money do you usually spend on gambling per week?", answers: ["Very little (within budget)", "Moderate", "High", "More than I can afford"] },
  { id: 3, text: "Do you set a budget before gambling?", answers: ["Always", "Sometimes", "Rarely", "Never"] },
  { id: 4, text: "Have you ever tried to stop gambling but couldn't?", answers: ["No", "Once", "A few times", "Many times"] },
  { id: 5, text: "Do you gamble to escape stress or problems?", answers: ["Never", "Sometimes", "Often", "Very often"] },
  { id: 6, text: "How do you feel after losing money?", answers: ["It's okay, I accept it", "Slightly frustrated", "Very upset", "I feel the need to win it back"] },
  { id: 7, text: "Have you ever borrowed money to gamble?", answers: ["Never", "Once", "A few times", "Often"] },
  { id: 8, text: "Has gambling affected your responsibilities like work, school, or family?", answers: ["Never", "Slightly", "Moderately", "Seriously"] },
  { id: 9, text: "Do you track how much time or money you spend gambling?", answers: ["Always", "Sometimes", "Rarely", "Never"] },
  { id: 10, text: "Do you feel in control of your gambling?", answers: ["Fully in control", "Mostly in control", "Not really", "Not at all"] },
  { id: 11, text: "Have you hidden your gambling from others?", answers: ["Never", "Once", "Sometimes", "Often"] },
  { id: 12, text: "Do you feel worried about your gambling habits?", answers: ["Not at all", "A little", "Yes", "Very worried"] },
];

const acknowledgments = [
  "Thanks for sharing that.",
  "Got it.",
  "I appreciate your honesty.",
  "Thanks for being open.",
  "Noted, let's keep going.",
  "Thank you.",
];

type RiskLevel = "low" | "moderate" | "high";

interface RiskInfo {
  level: RiskLevel;
  label: string;
  message: string;
  actions: string[];
  color: string;
  bgColor: string;
}

const riskMap: Record<RiskLevel, RiskInfo> = {
  low: {
    level: "low",
    label: "Low Risk",
    message: "You're doing well. Your answers suggest you have a good level of control over your gambling. Keep setting limits and treat gambling as entertainment, not a source of income.",
    actions: ["Keep a weekly budget", "Avoid gambling when emotional", "Track spending and time"],
    color: "text-emerald-700",
    bgColor: "bg-emerald-50 border-emerald-200",
  },
  moderate: {
    level: "moderate",
    label: "Moderate Risk",
    message: "There are a few warning signs. Your answers suggest that gambling may be starting to affect your habits. Setting stricter limits and reducing frequency now can help prevent bigger problems later.",
    actions: ["Reduce gambling frequency", "Set a firm spending cap", "Take 7 days off from gambling", "Tell someone you trust"],
    color: "text-amber-700",
    bgColor: "bg-amber-50 border-amber-200",
  },
  high: {
    level: "high",
    label: "High Risk",
    message: "Your gambling may be affecting you more than expected. Your answers show strong signs of risk. You are not alone, and taking a break now can make a real difference. Consider reaching out for support and putting clear limits in place.",
    actions: ["Stop gambling for now", "Block access to betting apps/sites", "Ask a trusted person for support", "Seek professional counseling or community help"],
    color: "text-rose-700",
    bgColor: "bg-rose-50 border-rose-200",
  },
};

// --- Helpers ---

function getScore(answers: Record<number, number>): number {
  return Object.entries(answers).reduce((sum, [qId, aIdx]) => sum + aIdx, 0);
}

function getRiskLevel(score: number): RiskLevel {
  if (score <= 10) return "low";
  if (score <= 22) return "moderate";
  return "high";
}

function randomAck() {
  return acknowledgments[Math.floor(Math.random() * acknowledgments.length)];
}

// --- Components ---

type Screen = "welcome" | "quiz" | "ack" | "results";

type NextStepKey = "spending" | "break" | "habits" | "support";

const nextStepButtons: { label: string; icon: typeof DollarSign; key: NextStepKey }[] = [
  { label: "Set a spending limit", icon: DollarSign, key: "spending" },
  { label: "Take a break plan", icon: Clock, key: "break" },
  { label: "Learn safer habits", icon: BookOpen, key: "habits" },
  { label: "Get support", icon: Phone, key: "support" },
];

const nextStepContent: Record<NextStepKey, { title: string; description: string; tips: string[]; links: { label: string; url: string }[] }> = {
  spending: {
    title: "Set a Spending Limit",
    description: "Setting a clear budget before you gamble helps you stay in control. Here's how to get started:",
    tips: [
      "Decide on a fixed weekly amount you can afford to lose — and stick to it.",
      "Use a budgeting app or notebook to track every bet.",
      "Never use money meant for rent, bills, or essentials.",
      "Set deposit limits on betting platforms (most allow this in settings).",
      "Review your spending at the end of each week.",
    ],
    links: [
      { label: "GambleAware Budget Tool", url: "https://www.begambleaware.org/" },
      { label: "GamCare Money Advice", url: "https://www.gamcare.org.uk/" },
    ],
  },
  break: {
    title: "Take a Break Plan",
    description: "Taking a break from gambling gives you space to reset. Try this step-by-step plan:",
    tips: [
      "Commit to at least 7 days with no gambling of any kind.",
      "Delete or log out of betting apps during your break.",
      "Fill your time with activities you enjoy — exercise, hobbies, socialising.",
      "Tell a friend or family member about your break for accountability.",
      "Use self-exclusion tools like GAMSTOP to block access to UK gambling sites.",
    ],
    links: [
      { label: "GAMSTOP Self-Exclusion", url: "https://www.gamstop.co.uk/" },
      { label: "TalkBanStop Support", url: "https://www.talkbanstop.com/" },
    ],
  },
  habits: {
    title: "Learn Safer Gambling Habits",
    description: "Knowledge is power. Understanding gambling risks helps you make better choices:",
    tips: [
      "Treat gambling as entertainment, not a way to make money.",
      "Set time limits as well as money limits.",
      "Never chase losses — the odds are designed against you.",
      "Avoid gambling when you're stressed, upset, or under the influence.",
      "Learn how odds work — the house always has an edge.",
    ],
    links: [
      { label: "BeGambleAware Resources", url: "https://www.begambleaware.org/" },
      { label: "Young Gamers & Gamblers Education Trust", url: "https://www.ygam.org/" },
      { label: "Youth Nexus Hub Programs", url: "/" },
    ],
  },
  support: {
    title: "Get Support",
    description: "You don't have to face this alone. Reaching out is a sign of strength, not weakness.",
    tips: [
      "Talk to someone you trust — a friend, family member, or mentor.",
      "Call the National Gambling Helpline: 0808 8020 133 (free, 24/7).",
      "Chat online with trained advisors at GamCare.",
      "Consider joining a peer support group.",
      "Youth Nexus Hub is here for you — reach out to us anytime.",
    ],
    links: [
      { label: "GamCare Live Chat", url: "https://www.gamcare.org.uk/" },
      { label: "National Gambling Helpline", url: "tel:08088020133" },
      { label: "Contact Youth Nexus Hub", url: "/partner" },
    ],
  },
};

const fadeVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function BetGuardPage() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [ackText, setAckText] = useState("");

  const [activeStep, setActiveStep] = useState<NextStepKey | null>(null);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentQ(0);
    setAnswers({});
  };

  const handleAnswer = useCallback((answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentQ]: answerIndex }));
    setAckText(randomAck());
    setScreen("ack");
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((c) => c + 1);
        setScreen("quiz");
      } else {
        setScreen("results");
      }
    }, 1200);
  }, [currentQ]);

  const handleRestart = () => {
    setScreen("welcome");
    setCurrentQ(0);
    setAnswers({});
  };

  const score = getScore(answers);
  const risk = getRiskLevel(score);
  const riskInfo = riskMap[risk];
  const progress = screen === "quiz" || screen === "ack" ? ((currentQ + (screen === "ack" ? 1 : 0)) / questions.length) * 100 : 0;
  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#E91E90]" />
            <span className="font-bold text-lg tracking-tight text-gray-900">BetGuard AI</span>
          </div>
          <span className="text-xs text-gray-400">by Youth Nexus Hub Ltd</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            {/* WELCOME */}
            {screen === "welcome" && (
              <motion.div key="welcome" variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }} className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E91E90] to-[#38BDF8] flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Let's check in on your gambling habits</h1>
                <p className="text-gray-500 text-base max-w-sm">This takes about 2–3 minutes. No judgment, just honest answers.</p>
                <Button onClick={handleStart} className="rounded-full px-8 py-3 text-base font-semibold bg-gradient-to-r from-[#E91E90] to-[#38BDF8] text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all h-auto">
                  Start Check-In <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
                  <Eye className="w-3.5 h-3.5" /> Anonymous &amp; Private
                </div>
              </motion.div>
            )}

            {/* QUIZ */}
            {screen === "quiz" && (
              <motion.div key={`q-${currentQ}`} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#E91E90]">Question {currentQ + 1} of {questions.length}</span>
                    <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2 rounded-full bg-gray-100 [&>div]:bg-gradient-to-r [&>div]:from-[#E91E90] [&>div]:to-[#38BDF8]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">{q.text}</h2>
                <div className="flex flex-col gap-3">
                  {q.answers.map((a, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className="w-full text-left px-5 py-4 rounded-2xl border border-gray-200 bg-white hover:border-[#38BDF8] hover:bg-sky-50 active:scale-[0.98] transition-all text-gray-800 font-medium shadow-sm hover:shadow"
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ACKNOWLEDGMENT */}
            {screen === "ack" && (
              <motion.div key="ack" variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.25 }} className="flex flex-col items-center justify-center text-center gap-4 py-16">
                <Heart className="w-8 h-8 text-[#E91E90] animate-pulse" />
                <p className="text-lg font-medium text-gray-700">{ackText}</p>
              </motion.div>
            )}

            {/* RESULTS */}
            {screen === "results" && (
              <motion.div key="results" variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="flex flex-col gap-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Results</h2>
                  <p className="text-gray-500 text-sm">Based on your answers</p>
                </div>

                <Card className={`border-2 ${riskInfo.bgColor} shadow-md rounded-2xl`}>
                  <CardContent className="flex flex-col items-center gap-4 py-8">
                    <Badge className={`text-sm px-4 py-1.5 rounded-full font-semibold ${risk === "low" ? "bg-emerald-500 text-white" : risk === "moderate" ? "bg-amber-500 text-white" : "bg-rose-500 text-white"}`}>
                      {riskInfo.label}
                    </Badge>
                    <div className="text-4xl font-bold text-gray-900">{score}<span className="text-lg text-gray-400 font-normal"> / 36</span></div>
                    <p className={`text-center text-sm leading-relaxed max-w-sm ${riskInfo.color}`}>{riskInfo.message}</p>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Suggested Actions</h3>
                  <ul className="space-y-2">
                    {riskInfo.actions.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1 w-2 h-2 rounded-full bg-[#38BDF8] shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What would you like to do next?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {nextStepButtons.map((btn) => (
                      <button key={btn.label} onClick={() => setActiveStep(btn.key)} className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-gray-200 bg-white hover:border-[#E91E90] hover:bg-pink-50 transition-all text-sm font-medium text-gray-800 shadow-sm hover:shadow">
                        <btn.icon className="w-4 h-4 text-[#E91E90]" />
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Step Dialog */}
                <Dialog open={!!activeStep} onOpenChange={(open) => !open && setActiveStep(null)}>
                  <DialogContent className="max-w-md rounded-2xl">
                    {activeStep && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-gray-900">{nextStepContent[activeStep].title}</DialogTitle>
                          <DialogDescription className="text-gray-500">{nextStepContent[activeStep].description}</DialogDescription>
                        </DialogHeader>
                        <ul className="space-y-2 mt-2">
                          {nextStepContent[activeStep].tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E91E90] shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-col gap-2">
                          {nextStepContent[activeStep].links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target={link.url.startsWith("http") ? "_blank" : undefined}
                              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:border-[#38BDF8] hover:bg-sky-50 transition-all text-sm font-medium text-gray-800"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>

                <Button onClick={handleRestart} variant="outline" className="rounded-full mx-auto mt-4">
                  <RotateCcw className="w-4 h-4 mr-1" /> Start Over
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-100">
        © {new Date().getFullYear()} Youth Nexus Hub Ltd — BetGuard AI
      </footer>
    </div>
  );
}
