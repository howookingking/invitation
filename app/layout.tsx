import type { Metadata } from "next";
import { Geist, Geist_Mono, Gowun_Dodum } from "next/font/google";
import "./globals.css";
import FloatingHearts from "@/components/common/floating-heart";
import { Toaster } from "@/components/ui/sonner";
import SectionIndicator from "@/components/common/section-indicator";

const font = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "이정우 ❤️ 권유진 결혼합니다",
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
        className={`${font.className} ${geistMono.variable} antialiased bg-rose-50`}
      >
        <main className="max-w-[400px] mx-auto bg-white">{children}</main>

        {/* <FloatingHearts /> */}

        <SectionIndicator />
        <Toaster />
      </body>
    </html>
  );
}
