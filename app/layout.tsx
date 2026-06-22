import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "마포 신촌 룸 가라오케 이달인 실장",
  description:
    "신촌역, 마포역 인근 메이저 룸 가라오케. 최저의 가격, 최고의 비주얼. 전화 및 문자 문의 가능.",
  verification: {
    google: "mHVDHFzN6MYAfdGj6gkj0BMizBgM3Y5TJjh7K-WOg-g",
  },
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