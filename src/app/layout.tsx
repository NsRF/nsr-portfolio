import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nasser Farhat | Senior Full-Stack Developer",
  description: "Senior Full-Stack Developer specializing in .NET, Node.js, React, and cloud technologies. Available for global remote opportunities.",
  keywords: "full-stack developer, senior developer, React, .NET, Node.js, TypeScript, remote developer",
  authors: [{ name: "Nasser Farhat" }],
  creator: "Nasser Farhat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nasser.dev",
    title: "Nasser Farhat | Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer specializing in .NET, Node.js, React, and cloud technologies. Available for global remote opportunities.",
    siteName: "Nasser Farhat Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasser Farhat | Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer specializing in .NET, Node.js, React, and cloud technologies. Available for global remote opportunities."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}