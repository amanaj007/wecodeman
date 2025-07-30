"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ minHeight: "100vh", background: "#09090b", color: "#fff" }}
      >
        <div
          style={{
            marginLeft: 0,
            transition: "margin-left 0.3s cubic-bezier(.4,0,.2,1)",
            minHeight: "100vh",
            background: "#09090b",
            color: "#fff",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
