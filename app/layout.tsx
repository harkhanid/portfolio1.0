import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dharmik Harkhani - Software Engineer",
  description:
    "Welcome to my portfolio! I am a passionate developer who believes in simplicity and effectiveness. I focus on creating straightforward solutions that solve real problems, with clean code and intuitive user experiences.",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Clean Code",
    "Simple Design",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "User Experience",
    "Problem Solving",
    "Effective Solutions",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Dharmik Harkhani",
  ],
  authors: [{ name: "Dharmik Harkhani" }],
  creator: "Dharmik Harkhani",
  openGraph: {
    title: "Dharmik Harkhani - Developer Portfolio",
    description:
      "Passionate developer creating simple and effective solutions. Explore my projects and development approach.",
    url: "https://your-domain.com",
    siteName: "Dharmik Harkhani - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dharmik Harkhani - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Name] - Developer",
    description:
      "Passionate developer creating simple and effective solutions. Explore my projects and development approach.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
