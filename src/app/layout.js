"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Sidebar({ open, onClose }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: open ? 0 : -220,
        width: 220,
        height: "100vh",
        background: "#09090b",
        color: "#fff",
        boxShadow: open ? "2px 0 8px #0008" : "none",
        transition: "left 0.3s cubic-bezier(.4,0,.2,1)",
        zIndex: 1000,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <button
        onClick={onClose}
        style={{ alignSelf: "flex-end", background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#fff" }}
        aria-label="Close sidebar"
      >
        ×
      </button>
      <Link href="/" style={{ fontWeight: 700, fontSize: 20, marginBottom: 16, color: "#fff", textDecoration: "none" }}>Dashboard</Link>
      <Link href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
      <Link href="/projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</Link>
      <Link href="/skills" style={{ color: "#fff", textDecoration: "none" }}>Skills</Link>
      <Link href="/experience" style={{ color: "#fff", textDecoration: "none" }}>Experience</Link>
      <Link href="/education" style={{ color: "#fff", textDecoration: "none" }}>Education</Link>
      <Link href="/certifications" style={{ color: "#fff", textDecoration: "none" }}>Certifications</Link>
      <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

function SidebarToggle({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: 18,
        left: 18,
        zIndex: 1100,
        background: "#09090b",
        color: "#fff",
        border: "1px solid #333",
        borderRadius: 6,
        padding: 8,
        fontSize: 22,
        cursor: "pointer",
        boxShadow: "0 2px 8px #0008",
      }}
      aria-label="Open sidebar"
    >
      ☰
    </button>
  );
}

export default function RootLayout({ children }) {
  // Use React state for sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ minHeight: "100vh", background: "#09090b", color: "#fff" }}
      >
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        {!sidebarOpen && <SidebarToggle onClick={() => setSidebarOpen(true)} />}
        <div
          style={{
            marginLeft: sidebarOpen ? 220 : 0,
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
