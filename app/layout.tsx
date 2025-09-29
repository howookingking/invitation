import SectionIndicator from "@/components/common/section-indicator";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Gowun_Dodum } from "next/font/google";
import "./globals.css";
// import FloatingHearts from "@/components/common/floating-heart";

const font = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🤵🏻정우👰🏻‍♀️유진",
  description: "1월 18일 오전 11시",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${font.className} ${geistMono.variable} bg-rose-50 antialiased`}
      >
        <main className="mx-auto max-w-[400px] bg-white">{children}</main>

        {/* <FloatingHearts /> */}
        <SectionIndicator />
        <Toaster />
      </body>
    </html>
  );
}
