"use client";

import PayPalProvider from "@/components/providers/PayPalProvider";
import DonationForm from "@/components/forms/DonationForm";

interface DonationOption {
  id: string;
  title: string;
  amount: number | null;
  description: string;
  recurring: boolean;
}

export default function DonationFormWrapper({
  options,
}: {
  options: DonationOption[];
}) {
  return (
    <PayPalProvider>
      <DonationForm options={options} />
    </PayPalProvider>
  );
}
