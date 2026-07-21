"use client";

import { Toaster } from "sonner";
import { ReactNode } from "react";
import { OtpGate } from "@/components/otp-gate";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <OtpGate>
        {children}
      </OtpGate>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#FEFAF5",
            border: "2px solid #1B6B93",
            color: "#06283D",
            borderRadius: "0.75rem",
            fontFamily: "var(--font-sans)",
          },
        }}
      />
    </>
  );
}

