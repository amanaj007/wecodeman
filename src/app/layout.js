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
      <head>
        {/* Primary Meta Tags */}
        <title>Aman Jaiswal - Front-End Developer (Vue.js/React.js) | Portfolio</title>
        <meta name="title" content="Aman Jaiswal - Front-End Developer (Vue.js/React.js) | Portfolio" />
        <meta name="description" content="Front-end developer with 5+ years of experience building responsive web applications using Vue.js, React.js, and modern web technologies. View my portfolio and projects." />
        <meta name="keywords" content="front-end developer, vue.js developer, react.js developer, web developer, javascript developer, portfolio, web applications, responsive design" />
        <meta name="author" content="Aman Jaiswal" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://wecodeman.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wecodeman.com" />
        <meta property="og:title" content="Aman Jaiswal - Front-End Developer (Vue.js/React.js) | Portfolio" />
        <meta property="og:description" content="Front-end developer with 5+ years of experience building responsive web applications using Vue.js, React.js, and modern web technologies." />
        <meta property="og:image" content="https://wecodeman.com/logo.jpeg" />
        <meta property="og:site_name" content="Aman Jaiswal Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wecodeman.com" />
        <meta property="twitter:title" content="Aman Jaiswal - Front-End Developer (Vue.js/React.js) | Portfolio" />
        <meta property="twitter:description" content="Front-end developer with 5+ years of experience building responsive web applications using Vue.js, React.js, and modern web technologies." />
        <meta property="twitter:image" content="https://wecodeman.com/logo.jpeg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#09090b" />
        <meta name="msapplication-TileColor" content="#09090b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aman Jaiswal",
              "jobTitle": "Front-End Developer",
              "description": "Front-end developer with 5+ years of experience building responsive web applications using Vue.js, React.js, and modern web technologies.",
              "url": "https://wecodeman.com",
              "image": "https://wecodeman.com/logo.jpeg",
              "email": "aj007.12@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Korba",
                "addressRegion": "Chhattisgarh",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://www.linkedin.com/in/amanaj/",
                "https://github.com/amanaj007",
                "https://leetcode.com/user4539vs/"
              ],
              "knowsAbout": [
                "Vue.js",
                "React.js",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Node.js",
                "MongoDB",
                "Web Development",
                "Front-end Development"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Manipal Academy of Higher Education"
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aman Jaiswal Portfolio",
              "url": "https://wecodeman.com",
              "description": "Front-end developer portfolio showcasing Vue.js and React.js projects",
              "author": {
                "@type": "Person",
                "name": "Aman Jaiswal"
              }
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
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
