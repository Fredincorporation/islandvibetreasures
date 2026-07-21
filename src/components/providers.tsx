"use client";

import { Toaster } from "sonner";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
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
