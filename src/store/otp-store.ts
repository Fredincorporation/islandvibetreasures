import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface OtpCode {
  id: string;
  code: string;
  label: string;
  createdAt: string;
  isUsed: boolean;
  usedAt?: string;
}

// Initial 10 generated OTP codes
export const INITIAL_OTP_CODES: OtpCode[] = [
  { id: "otp-1", code: "849201", label: "Initial Access Pass 1", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-2", code: "930184", label: "Initial Access Pass 2", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-3", code: "472910", label: "Initial Access Pass 3", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-4", code: "605381", label: "Initial Access Pass 4", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-5", code: "158749", label: "Initial Access Pass 5", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-6", code: "392805", label: "Initial Access Pass 6", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-7", code: "714629", label: "Initial Access Pass 7", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-8", code: "503918", label: "Initial Access Pass 8", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-9", code: "261473", label: "Initial Access Pass 9", createdAt: "2026-07-21", isUsed: false },
  { id: "otp-10", code: "837592", label: "Initial Access Pass 10", createdAt: "2026-07-21", isUsed: false },
];

function generateRandomCode(): string {
  const num = Math.floor(100000 + Math.random() * 900000);
  return num.toString();
}

function normalizeCode(str: string): string {
  return str.trim().toUpperCase().replace(/[\s\-_]/g, "");
}

function setAuthCookie(value: boolean) {
  if (typeof document !== "undefined") {
    if (value) {
      // Set cookie for 30 days
      document.cookie = `ivt_otp_authenticated=true; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
    } else {
      document.cookie = "ivt_otp_authenticated=; path=/; max-age=0";
    }
  }
}

interface OtpState {
  isAuthenticated: boolean;
  singleUseMode: boolean;
  otpCodes: OtpCode[];
  masterPasscode: string;
  hasHydrated: boolean;
  
  // Actions
  verifyOtp: (inputCode: string) => { success: boolean; message: string; codeObj?: OtpCode };
  lockSite: () => void;
  unlockSite: () => void;
  addCustomOtp: (code: string, label?: string) => { success: boolean; message: string };
  generateNewBatch: (count?: number) => void;
  deleteOtp: (id: string) => void;
  toggleSingleUseMode: () => void;
  resetToDefaults: () => void;
  setMasterPasscode: (code: string) => void;
  setHasHydrated: (state: boolean) => void;
}

export const useOtpStore = create<OtpState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      singleUseMode: true,
      otpCodes: INITIAL_OTP_CODES,
      masterPasscode: "ALOHA2026",
      hasHydrated: false,

      verifyOtp: (inputCode: string) => {
        const cleanInput = normalizeCode(inputCode);
        if (!cleanInput) {
          return { success: false, message: "Please enter a valid passcode." };
        }

        const state = get();

        // Check master passcode
        if (cleanInput === normalizeCode(state.masterPasscode)) {
          set({ isAuthenticated: true });
          setAuthCookie(true);
          return {
            success: true,
            message: "Master Passcode accepted! Welcome to Island Vibe Treasures.",
          };
        }

        // Search active OTPs
        const existingIndex = state.otpCodes.findIndex(
          (item) => normalizeCode(item.code) === cleanInput
        );

        if (existingIndex === -1) {
          return {
            success: false,
            message: "Invalid passcode. Please check your One-Time Password and try again.",
          };
        }

        const match = state.otpCodes[existingIndex];

        if (state.singleUseMode && match.isUsed) {
          return {
            success: false,
            message: `This One-Time Password (${match.code}) has already been redeemed.`,
          };
        }

        // Mark code as used if single-use mode is enabled
        const updatedCodes = [...state.otpCodes];
        updatedCodes[existingIndex] = {
          ...match,
          isUsed: true,
          usedAt: new Date().toISOString(),
        };

        set({
          isAuthenticated: true,
          otpCodes: updatedCodes,
        });
        setAuthCookie(true);

        return {
          success: true,
          message: "Passcode verified! Unlocking access...",
          codeObj: updatedCodes[existingIndex],
        };
      },

      lockSite: () => {
        set({ isAuthenticated: false });
        setAuthCookie(false);
      },

      unlockSite: () => {
        set({ isAuthenticated: true });
        setAuthCookie(true);
      },

      addCustomOtp: (rawCode: string, label?: string) => {
        const clean = normalizeCode(rawCode);
        if (!clean || clean.length < 4) {
          return { success: false, message: "Passcode must be at least 4 characters long." };
        }

        const state = get();
        const exists = state.otpCodes.some((item) => normalizeCode(item.code) === clean);
        if (exists) {
          return { success: false, message: "This passcode already exists in your list." };
        }

        const newOtp: OtpCode = {
          id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          code: clean,
          label: label?.trim() || `Custom Passcode`,
          createdAt: new Date().toISOString().split("T")[0],
          isUsed: false,
        };

        set({ otpCodes: [newOtp, ...state.otpCodes] });
        return { success: true, message: `Passcode "${clean}" added successfully!` };
      },

      generateNewBatch: (count = 10) => {
        const newBatch: OtpCode[] = [];
        const today = new Date().toISOString().split("T")[0];
        
        for (let i = 1; i <= count; i++) {
          let code = generateRandomCode();
          newBatch.push({
            id: `gen-${Date.now()}-${i}-${Math.random().toString(36).slice(2, 5)}`,
            code,
            label: `Batch Passcode ${i}`,
            createdAt: today,
            isUsed: false,
          });
        }

        set((state) => ({
          otpCodes: [...newBatch, ...state.otpCodes],
        }));
      },

      deleteOtp: (id: string) => {
        set((state) => ({
          otpCodes: state.otpCodes.filter((item) => item.id !== id),
        }));
      },

      toggleSingleUseMode: () => {
        set((state) => ({ singleUseMode: !state.singleUseMode }));
      },

      resetToDefaults: () => {
        set({ otpCodes: INITIAL_OTP_CODES, singleUseMode: true });
      },

      setMasterPasscode: (code: string) => {
        set({ masterPasscode: code });
      },

      setHasHydrated: (val: boolean) => {
        set({ hasHydrated: val });
      },
    }),
    {
      name: "ivt_otp_security_store",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHasHydrated(true);
        }
      },
    }
  )
);
