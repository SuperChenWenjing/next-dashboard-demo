import React from "react";

import { inter } from "@/app/ui/fonts";

import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}