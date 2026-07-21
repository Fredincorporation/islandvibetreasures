"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { useOtpStore } from "@/store/otp-store";
import { OtpAdminModal } from "@/components/otp-admin-modal";
import { toast } from "sonner";
import { 
  Lock, 
  KeyRound, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Eye,
  EyeOff,
  HelpCircle
} from "lucide-react";

interface OtpGateProps {
  children: ReactNode;
}

export function OtpGate({ children }: OtpGateProps) {
  const { 
    isAuthenticated, 
    hasHydrated, 
    verifyOtp, 
    otpCodes,
    masterPasscode 
  } = useOtpStore();

  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const [customInput, setCustomInput] = useState("");
  const [mode, setMode] = useState<"pin" | "text">("pin");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [unlockedSuccess, setUnlockedSuccess] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showCodesPreview, setShowCodesPreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    setMounted(true);
    
    const checkSessionStatus = () => {
      if (typeof document === "undefined") return;

      const state = useOtpStore.getState();
      const match = document.cookie.match(new RegExp("(^| )ivt_otp_authenticated=([^;]+)"));
      const hasValidCookie = match && match[2] === "true";

      const now = Date.now();
      const authenticatedAt = state.authenticatedAt;
      const SESSION_TIMEOUT_MS = 20 * 60 * 1000; // 20 minutes
      const isExpiredByTime = authenticatedAt ? (now - authenticatedAt >= SESSION_TIMEOUT_MS) : false;

      if (state.isAuthenticated) {
        if (!hasValidCookie || isExpiredByTime) {
          state.lockSite();
          toast.error("Your 20-minute session has expired. Please enter your passcode again.");
        }
      } else {
        if (hasValidCookie && authenticatedAt && !isExpiredByTime) {
          state.unlockSite();
        }
      }
    };

    checkSessionStatus();
    const interval = setInterval(checkSessionStatus, 3000);

    const handleFocusOrVisibility = () => {
      checkSessionStatus();
    };

    window.addEventListener("focus", handleFocusOrVisibility);
    document.addEventListener("visibilitychange", handleFocusOrVisibility);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", handleFocusOrVisibility);
      document.removeEventListener("visibilitychange", handleFocusOrVisibility);
    };
  }, []);

  // Auto focus first pin input box
  useEffect(() => {
    if (mounted && !isAuthenticated && mode === "pin" && inputRefs[0].current) {
      setTimeout(() => {
        inputRefs[0].current?.focus();
      }, 100);
    }
  }, [mounted, isAuthenticated, mode]);

  const triggerShake = (msg: string) => {
    setErrorMsg(msg);
    setShake(true);
    toast.error(msg);
    setTimeout(() => setShake(false), 600);
  };

  const handleDigitChange = (index: number, val: string) => {
    setErrorMsg(null);
    const cleaned = val.replace(/[^0-9a-zA-Z]/g, "");

    if (cleaned.length > 1) {
      // Handle paste in digit box
      const pasted = cleaned.slice(0, 6).split("");
      const newDigits = [...digits];
      pasted.forEach((char, i) => {
        if (i < 6) newDigits[i] = char.toUpperCase();
      });
      setDigits(newDigits);
      
      const nextIndex = Math.min(pasted.length, 5);
      inputRefs[nextIndex].current?.focus();
      return;
    }

    const newDigits = [...digits];
    newDigits[index] = cleaned.toUpperCase();
    setDigits(newDigits);

    // Auto advance focus
    if (cleaned && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs[index + 1].current?.focus();
    } else if (e.key === "Enter") {
      handleVerify();
    }
  };

  const handleVerify = (codeToVerify?: string) => {
    const fullCode = codeToVerify || (mode === "pin" ? digits.join("") : customInput);

    if (!fullCode || fullCode.length === 0) {
      triggerShake("Please enter your passcode.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    setTimeout(() => {
      const res = verifyOtp(fullCode);
      setIsSubmitting(false);

      if (res.success) {
        setUnlockedSuccess(true);
        toast.success(res.message);
      } else {
        triggerShake(res.message);
      }
    }, 400);
  };

  const handleAutoFillCode = (code: string) => {
    if (code.length === 6 && /^[0-9a-zA-Z]+$/.test(code)) {
      setMode("pin");
      setDigits(code.split(""));
    } else {
      setMode("text");
      setCustomInput(code);
    }
    toast.info(`Passcode "${code}" loaded into input!`);
  };

  // Avoid flash during SSR/hydration
  if (!mounted) {
    return <div className="min-h-screen bg-sand-50" />;
  }

  // If user is already authenticated, render main site content
  if (isAuthenticated && !unlockedSuccess) {
    return <>{children}</>;
  }

  return (
    <>
      {/* If authenticated, show main content behind (or rendered) */}
      {isAuthenticated && children}

      {/* OTP Gate Overlay */}
      {!isAuthenticated && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-950 font-sans overflow-y-auto">
          
          {/* Ambient Tropical Glowing Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />
          </div>

          {/* Main OTP Card */}
          <div 
            className={`relative w-full max-w-lg bg-sand-50/95 backdrop-blur-xl rounded-3xl border-2 border-gold-300/60 shadow-2xl overflow-hidden transition-all duration-300 ${
              shake ? "animate-bounce ring-2 ring-coral-500" : ""
            } ${unlockedSuccess ? "scale-95 opacity-0 transition-all duration-500" : "scale-100 opacity-100"}`}
          >
            {/* Top Decorative Gold Banner */}
            <div className="h-2 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500" />

            <div className="p-8 sm:p-10 text-center">

              {/* Logo / Lock Badge */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-gold-400/20 rounded-2xl blur-md" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-ocean-800 to-ocean-900 text-gold-300 rounded-2xl border-2 border-gold-400/50 flex items-center justify-center shadow-lg">
                  {unlockedSuccess ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce" />
                  ) : (
                    <Lock className="w-8 h-8 text-gold-300" />
                  )}
                </div>
              </div>

              {/* Brand Title */}
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-ocean-600 mb-1 block">
                Island Vibe Treasures
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-ocean-900 mb-2">
                One-Time Password Access
              </h1>
              <p className="text-sm text-ocean-700 max-w-sm mx-auto leading-relaxed">
                This website is passcode protected. Passcodes are <strong className="text-ocean-900">one-time use</strong> (valid until redeemed) and grant a 20-minute access session.
              </p>

              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-ocean-100/80 border border-ocean-200/80 rounded-full text-xs font-semibold text-ocean-800">
                <Clock className="w-3.5 h-3.5 text-ocean-600" />
                <span>20-Minute Session Timeout</span>
              </div>

              {/* Success Banner */}
              {unlockedSuccess && (
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-emerald-800 flex items-center justify-center gap-2 animate-fade-in">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-sm">Passcode Verified! Welcome in...</span>
                </div>
              )}

              {!unlockedSuccess && (
                <div className="mt-8 space-y-6">

                  {/* Mode Selector Tabs */}
                  <div className="flex justify-center bg-sand-200/70 p-1 rounded-xl max-w-xs mx-auto text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setMode("pin")}
                      className={`flex-1 py-1.5 rounded-lg transition-all ${
                        mode === "pin"
                          ? "bg-ocean-900 text-gold-300 shadow-sm"
                          : "text-ocean-700 hover:text-ocean-900"
                      }`}
                    >
                      6-Digit PIN
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode("text")}
                      className={`flex-1 py-1.5 rounded-lg transition-all ${
                        mode === "text"
                          ? "bg-ocean-900 text-gold-300 shadow-sm"
                          : "text-ocean-700 hover:text-ocean-900"
                      }`}
                    >
                      Custom Passcode
                    </button>
                  </div>

                  {/* Input Form */}
                  <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }}>
                    
                    {mode === "pin" ? (
                      /* 6-Digit PIN Boxes */
                      <div className="flex justify-center gap-2 sm:gap-3">
                        {digits.map((digit, idx) => (
                          <input
                            key={idx}
                            ref={inputRefs[idx]}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleDigitChange(idx, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(idx, e)}
                            className={`w-11 h-13 sm:w-12 sm:h-14 text-center font-mono text-xl sm:text-2xl font-bold rounded-xl border-2 transition-all outline-none ${
                              digit
                                ? "bg-white border-gold-400 text-ocean-900 shadow-md ring-2 ring-gold-200"
                                : "bg-white/80 border-sand-300 text-ocean-900 focus:border-ocean-600 focus:bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    ) : (
                      /* Custom Text Input */
                      <div className="relative max-w-sm mx-auto">
                        <input
                          type="text"
                          placeholder="Enter passcode string (e.g. ALOHA2026)"
                          value={customInput}
                          onChange={(e) => setCustomInput(e.target.value)}
                          className="w-full px-4 py-3 bg-white border-2 border-sand-300 focus:border-ocean-600 rounded-xl text-center font-mono font-bold text-lg text-ocean-900 uppercase placeholder:normal-case placeholder:font-sans placeholder:text-sm placeholder:text-sand-400 outline-none shadow-sm"
                        />
                      </div>
                    )}

                    {/* Error Message */}
                    {errorMsg && (
                      <p className="text-xs text-coral-600 font-semibold flex items-center justify-center gap-1 mt-3 animate-fade-in">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 w-full max-w-sm mx-auto py-3.5 px-6 bg-gradient-to-r from-ocean-800 via-ocean-700 to-ocean-900 hover:from-ocean-900 hover:to-ocean-800 text-gold-300 font-bold rounded-xl shadow-lg border border-gold-400/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-gold-300 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <KeyRound className="w-5 h-5 text-gold-300" />
                          <span>Unlock Website</span>
                          <ArrowRight className="w-4 h-4 text-gold-300 ml-1" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Private Owner Admin Trigger */}
                  <div className="pt-4 border-t border-sand-200/80 flex flex-col items-center gap-2 text-xs text-ocean-600">
                    <p className="text-[11px] text-ocean-600">
                      Need a One-Time Password? Contact the site owner for an access code.
                    </p>

                    <button
                      type="button"
                      onClick={() => setShowAdminModal(true)}
                      className="mt-1 text-[11px] text-ocean-600 hover:text-ocean-900 font-medium flex items-center justify-center gap-1.5 py-1 px-3 rounded-lg hover:bg-sand-200/60 transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                      <span>Owner / Admin Passcode Vault</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Brand Bar */}
            <div className="bg-sand-100 px-6 py-3 border-t border-sand-200 flex items-center justify-between text-[11px] text-ocean-600">
              <span className="flex items-center gap-1">
                🌴 Island Vibe Treasures Boutique
              </span>
              <span>Secure Gateway v1.0</span>
            </div>
          </div>
        </div>
      )}

      {/* Admin Passcode Modal */}
      <OtpAdminModal
        isOpen={showAdminModal}
        onClose={() => setShowAdminModal(false)}
        onSelectCode={(code) => {
          handleAutoFillCode(code);
          handleVerify(code);
        }}
      />
    </>
  );
}
