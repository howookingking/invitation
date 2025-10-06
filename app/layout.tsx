import SectionIndicator from "@/components/common/section-indicator";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Gowun_Dodum } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/common/scroll-to-top-button";
import CatEasterEgg from "@/components/common/cat-ester-egg";

const font = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🤵🏻정우 👰🏻‍♀️유진",
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
        className={`${font.className} ${geistMono.variable} bg-[#ebf2e4] antialiased`}
      >
        <main className="mx-auto max-w-[430px] bg-white shadow-xl">
          {children}
        </main>

        <CatEasterEgg />

        <SectionIndicator />

        <ScrollToTopButton />

        <Toaster richColors position="top-center" theme="light" />
      </body>
    </html>
  );
}

// #ebf2e4
