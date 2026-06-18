import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "신촌 셔츠룸 | 마포 셔츠룸 | 이달인 실장",
  description:
    "신촌역, 마포역 인근 메이저 셔츠룸. 최저의 가격, 최고의 비주얼. 전화 및 문자 문의 가능.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}