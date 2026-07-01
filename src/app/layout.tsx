import type { Metadata } from "next";
import { fraunces, workSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eulalee Beckford Designs | Brooklyn Millinery",
  description:
    "Fur felt hats handcrafted in Brooklyn — fedoras and open-crown styles, ready-to-wear or made to order. Milliner, jewelry & fashion in DUMBO.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body bg-cream text-ink">{children}</body>
    </html>
  );
}