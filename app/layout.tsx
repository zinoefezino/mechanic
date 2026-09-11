import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Summit Auto | Auto Repair and Maintenance",
    template: "%s | Summit Auto",
  },
  description:
    "Honest diagnostics and reliable auto repair. Book service with Summit Auto for brakes, oil, electrical, AC, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-paper text-charcoal">
        {children}
      </body>
    </html>
  );
}