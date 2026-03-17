import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Heart, Eye, ArrowRight, RotateCcw, Clock, DollarSign,
  BookOpen, Phone, ExternalLink, Download, Share2, AlertTriangle,
  CheckCircle, Users, Brain, HandHeart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
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
  return Object.entries(answers).reduce((sum, [, aIdx]) => sum + aIdx, 0);
}

function getRiskLevel(score: number): RiskLevel {
  if (score <= 10) return "low";
  if (score <= 22) return "moderate";
  return "high";
}

function randomAck() {
  return acknowledgments[Math.floor(Math.random() * acknowledgments.length)];
}

function generatePDF(score: number, riskInfo: RiskInfo, answers: Record<number, number>) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  doc.setFillColor(233, 30, 144);
  doc.rect(0, 0, pageWidth, 40, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("BetGuard AI — Self-Check Summary", margin, 27);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("by Youth Nexus Hub Ltd", margin, 35);
  y = 52;

  doc.setTextColor(120, 120, 120);
  doc.setFontSize(10);
  doc.text(`Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`, margin, y);
  y += 12;

  const riskColors: Record<RiskLevel, [number, number, number]> = {
    low: [16, 185, 129],
    moderate: [245, 158, 11],
    high: [244, 63, 94],
  };
  const [r, g, b] = riskColors[riskInfo.level];
  doc.setFillColor(r, g, b);
  doc.roundedRect(margin, y, contentWidth, 30, 4, 4, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(`${riskInfo.label}  —  Score: ${score} / 36`, margin + 10, y + 19);
  y += 40;

  doc.setTextColor(50, 50, 50);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  const messageLines = doc.splitTextToSize(riskInfo.message, contentWidth);
  doc.text(messageLines, margin, y);
  y += messageLines.length * 6 + 10;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 30, 30);
  doc.text("Your Answers", margin, y);
  y += 8;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  questions.forEach((q, i) => {
    if (y > 270) { doc.addPage(); y = 20; }
    const answerIdx = answers[i] ?? 0;
    const answerText = q.answers[answerIdx];
    const line = `${i + 1}. ${q.text}`;
    const wrapped = doc.splitTextToSize(line, contentWidth);
    doc.setFont("helvetica", "bold");
    doc.text(wrapped, margin, y);
    y += wrapped.length * 4.5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`   → ${answerText}`, margin, y);
    doc.setTextColor(80, 80, 80);
    y += 7;
  });

  y += 6;
  if (y > 250) { doc.addPage(); y = 20; }

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 30, 30);
  doc.text("Suggested Actions", margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  riskInfo.actions.forEach((action) => {
    if (y > 275) { doc.addPage(); y = 20; }
    doc.text(`•  ${action}`, margin + 4, y);
    y += 6;
  });

  y += 8;
  doc.setFontSize(8);
  doc.setTextColor(160, 160, 160);
  doc.text("This is a self-assessment tool and not a clinical diagnosis. If you need help, please reach out to a professional.", margin, 285);
  doc.text("© Youth Nexus Hub Ltd — www.youthnexushub.org", margin, 290);

  return doc;
}

// --- Next Step Data ---

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

// --- Page Component ---

type Screen = "welcome" | "quiz" | "ack" | "results";

export default function BetGuardPage() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [ackText, setAckText] = useState("");
  const [activeStep, setActiveStep] = useState<NextStepKey | null>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setScreen("quiz");
    setCurrentQ(0);
    setAnswers({});
    // Scroll to the assessment section
    setTimeout(() => {
      document.getElementById("betguard-assessment")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
    setStarted(false);
    setCurrentQ(0);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = getScore(answers);
  const risk = getRiskLevel(score);
  const riskInfo = riskMap[risk];
  const progress = screen === "quiz" || screen === "ack" ? ((currentQ + (screen === "ack" ? 1 : 0)) / questions.length) * 100 : 0;
  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#E91E90]/10 via-background to-[#38BDF8]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E91E90] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E91E90]/10 text-[#E91E90] font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" />
              BetGuard AI – Your Safer Gambling Friend
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(var(--primary))" }}>
              Check Your Gambling Risk in 3 Minutes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A private, supportive self-check tool that helps you reflect on your gambling habits and make safer decisions.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border text-sm text-foreground">
                <Eye className="w-4 h-4 text-[#E91E90]" />
                Anonymous and private
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border text-sm text-foreground">
                <Clock className="w-4 h-4 text-[#38BDF8]" />
                Takes about 2–3 minutes
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border text-sm text-foreground">
                <Heart className="w-4 h-4 text-[#E91E90]" />
                No judgment, just honest reflection
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleStart}
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#E91E90] to-[#38BDF8] text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all h-auto"
              >
                Start Your Check-In <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg h-auto border-2"
                onClick={() => document.getElementById("safer-habits")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn About Safe Gambling
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--primary))" }}>
              Why This Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              Gambling can go from fun to harmful without you noticing. A quick check-in helps you stay aware and in control.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: AlertTriangle,
                title: "Gambling harm is rising",
                desc: "Young people are increasingly affected by gambling, with online betting making it more accessible than ever.",
                accent: "#E91E90",
              },
              {
                icon: Brain,
                title: "Self-awareness is prevention",
                desc: "Understanding your habits early is the single most effective way to avoid developing a gambling problem.",
                accent: "#38BDF8",
              },
              {
                icon: HandHeart,
                title: "Support changes lives",
                desc: "With the right tools and support, people recover and rebuild. This check-in is your first step.",
                accent: "#E91E90",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg rounded-2xl bg-background hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6 px-6 flex flex-col items-center text-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.accent}15` }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: item.accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BetGuard AI Assessment Tool */}
      <section id="betguard-assessment" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            {!started ? (
              <div className="text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#E91E90] to-[#38BDF8] flex items-center justify-center shadow-xl mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: "hsl(var(--primary))" }}>
                  BetGuard AI Self-Check
                </h2>
                <p className="text-muted-foreground mb-8">
                  Answer 12 simple questions honestly. Your results stay completely private.
                </p>
                <Button
                  onClick={handleStart}
                  className="rounded-full px-8 py-3 text-base font-semibold bg-gradient-to-r from-[#E91E90] to-[#38BDF8] text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all h-auto"
                >
                  Start Check-In <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                {/* QUIZ */}
                {screen === "quiz" && (
                  <motion.div key={`q-${currentQ}`} variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#E91E90]">Question {currentQ + 1} of {questions.length}</span>
                        <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2 rounded-full bg-secondary [&>div]:bg-gradient-to-r [&>div]:from-[#E91E90] [&>div]:to-[#38BDF8]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground leading-snug">{q.text}</h2>
                    <div className="flex flex-col gap-3">
                      {q.answers.map((a, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(i)}
                          className="w-full text-left px-5 py-4 rounded-2xl border border-border bg-background hover:border-[#38BDF8] hover:bg-[#38BDF8]/5 active:scale-[0.98] transition-all text-foreground font-medium shadow-sm hover:shadow"
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
                    <p className="text-lg font-medium text-foreground">{ackText}</p>
                  </motion.div>
                )}

                {/* RESULTS */}
                {screen === "results" && (
                  <motion.div key="results" variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="flex flex-col gap-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-foreground mb-1">Your Results</h2>
                      <p className="text-muted-foreground text-sm">Based on your answers</p>
                    </div>

                    <Card className={`border-2 ${riskInfo.bgColor} shadow-md rounded-2xl`}>
                      <CardContent className="flex flex-col items-center gap-4 py-8">
                        <Badge className={`text-sm px-4 py-1.5 rounded-full font-semibold ${risk === "low" ? "bg-emerald-500 text-white" : risk === "moderate" ? "bg-amber-500 text-white" : "bg-rose-500 text-white"}`}>
                          {riskInfo.label}
                        </Badge>
                        <div className="text-4xl font-bold text-foreground">{score}<span className="text-lg text-muted-foreground font-normal"> / 36</span></div>
                        <p className={`text-center text-sm leading-relaxed max-w-sm ${riskInfo.color}`}>{riskInfo.message}</p>
                      </CardContent>
                    </Card>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Suggested Actions</h3>
                      <ul className="space-y-2">
                        {riskInfo.actions.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 w-2 h-2 rounded-full bg-[#38BDF8] shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">What would you like to do next?</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {nextStepButtons.map((btn) => (
                          <button key={btn.label} onClick={() => setActiveStep(btn.key)} className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-border bg-background hover:border-[#E91E90] hover:bg-[#E91E90]/5 transition-all text-sm font-medium text-foreground shadow-sm hover:shadow">
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
                              <DialogTitle className="text-xl font-bold text-foreground">{nextStepContent[activeStep].title}</DialogTitle>
                              <DialogDescription className="text-muted-foreground">{nextStepContent[activeStep].description}</DialogDescription>
                            </DialogHeader>
                            <ul className="space-y-2 mt-2">
                              {nextStepContent[activeStep].tips.map((tip, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
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
                                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background hover:border-[#38BDF8] hover:bg-[#38BDF8]/5 transition-all text-sm font-medium text-foreground"
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

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
                      <Button
                        onClick={() => {
                          const doc = generatePDF(score, riskInfo, answers);
                          doc.save("BetGuard-AI-Results.pdf");
                        }}
                        className="rounded-full px-6 bg-gradient-to-r from-[#E91E90] to-[#38BDF8] text-white hover:shadow-lg"
                      >
                        <Download className="w-4 h-4 mr-1.5" /> Download PDF
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full px-6"
                        onClick={async () => {
                          const doc = generatePDF(score, riskInfo, answers);
                          const blob = doc.output("blob");
                          const file = new File([blob], "BetGuard-AI-Results.pdf", { type: "application/pdf" });
                          if (navigator.canShare?.({ files: [file] })) {
                            await navigator.share({ files: [file], title: "BetGuard AI Results", text: "My BetGuard AI self-check summary" });
                          } else {
                            doc.save("BetGuard-AI-Results.pdf");
                          }
                        }}
                      >
                        <Share2 className="w-4 h-4 mr-1.5" /> Share Summary
                      </Button>
                    </div>

                    <Button onClick={handleRestart} variant="outline" className="rounded-full mx-auto mt-2">
                      <RotateCcw className="w-4 h-4 mr-1" /> Start Over
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

      {/* Learn Safer Habits */}
      <section id="safer-habits" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--primary))" }}>
              Learn Safer Habits
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, practical tips to keep gambling fun and under control.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: DollarSign, title: "Set a budget", desc: "Decide how much you can afford to lose before you start. Never gamble with money meant for essentials.", accent: "#E91E90" },
              { icon: Clock, title: "Set time limits", desc: "Decide in advance how long you'll play. Use alarms or app timers to keep yourself accountable.", accent: "#38BDF8" },
              { icon: CheckCircle, title: "Never chase losses", desc: "Accept that losses happen. Trying to win back money almost always leads to bigger losses.", accent: "#E91E90" },
              { icon: Brain, title: "Understand the odds", desc: "The house always has an edge. Gambling is entertainment, not a strategy to make money.", accent: "#38BDF8" },
              { icon: Users, title: "Talk to someone", desc: "If gambling feels stressful, talk to a friend, family member, or counselor. You're not alone.", accent: "#E91E90" },
              { icon: Shield, title: "Use self-exclusion", desc: "Tools like GAMSTOP let you block yourself from gambling sites. It's a powerful safety net.", accent: "#38BDF8" },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md rounded-2xl bg-background hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-5 px-5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.accent}15` }}>
                    <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Need Extra Support? */}
      <section className="py-20 bg-gradient-to-br from-[#E91E90]/5 via-background to-[#38BDF8]/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--primary))" }}>
              Need Extra Support?
            </h2>
            <p className="text-lg text-muted-foreground">
              You don't have to face this alone. These organisations offer free, confidential help.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "GamCare", desc: "Free support, advice, and counselling for anyone affected by gambling.", url: "https://www.gamcare.org.uk/", color: "#E91E90" },
              { name: "GAMSTOP", desc: "Self-exclude from all UK-licensed gambling websites and apps.", url: "https://www.gamstop.co.uk/", color: "#38BDF8" },
              { name: "BeGambleAware", desc: "Information, advice, and tools to help you gamble safely.", url: "https://www.begambleaware.org/", color: "#E91E90" },
              { name: "National Helpline", desc: "Call 0808 8020 133 — free, confidential, 24/7 support.", url: "tel:08088020133", color: "#38BDF8" },
            ].map((org, i) => (
              <a
                key={i}
                href={org.url}
                target={org.url.startsWith("http") ? "_blank" : undefined}
                rel={org.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <Card className="border-none shadow-md rounded-2xl bg-background hover:shadow-xl transition-all group-hover:scale-[1.02] h-full">
                  <CardContent className="pt-6 pb-5 px-5 flex flex-col gap-3 h-full">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${org.color}15` }}>
                      <Phone className="w-5 h-5" style={{ color: org.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{org.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{org.desc}</p>
                    <span className="text-sm font-semibold flex items-center gap-1" style={{ color: org.color }}>
                      Visit <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="mb-4 flex justify-center">
              <img
                src="/lovable-uploads/c1eef694-5e1a-4f0a-a863-3778edbf61cd.png"
                alt="Youth Nexus Hub Ltd Logo"
                className="h-16 w-auto opacity-90"
              />
            </div>
            <p className="text-lg italic opacity-90 mb-4">
              "Empowering youth with skills, awareness, and purpose."
            </p>
          </div>
          <div className="text-sm opacity-75">
            <p>© {new Date().getFullYear()} Youth Nexus Hub Ltd. Based in Kigali, Rwanda.</p>
            <p className="mt-2">BetGuard AI — A safer gambling self-check tool by Youth Nexus Hub.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
