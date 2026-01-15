"use client";

import { useEffect } from "react";
import { trackDonation } from "@/lib/analytics";

interface DonationTrackerProps {
  amount?: string;
  program: string;
  isRecurring: boolean;
}

export default function DonationTracker({
  amount,
  program,
  isRecurring,
}: DonationTrackerProps) {
  useEffect(() => {
    if (amount) {
      trackDonation({
        amount: parseFloat(amount),
        programType: program,
        isRecurring,
      });
    }
  }, [amount, program, isRecurring]);

  return null;
}
