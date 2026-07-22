import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Ebenezer Jojo Mensah — Software Engineer",
  description:
    "The portfolio of Ebenezer Jojo Mensah, a software engineer building dependable digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
