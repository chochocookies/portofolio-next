import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Eko Aryanto | Fullstack Developer Portfolio",
  description: "Discover the innovative projects and skills of Eko Aryanto, a Fullstack Developer specializing in building dynamic, responsive web applications using the latest technologies like React, TailwindCSS, and Node.js.",
  keywords: "Eko Aryanto, Fullstack Developer, Web Development, React, TailwindCSS, Node.js, Portfolio",
  author: "Eko Aryanto",
  robots: "index, follow",
  ogTitle: "Eko Aryanto | Fullstack Developer Portfolio",
  ogDescription: "Explore Eko Aryanto's personal portfolio, showcasing expertise in web development with cutting-edge technologies.",
  ogUrl: "https://www.codeeko.me",
  // ogImage: "https://www.yourdomain.com/assets/og-image.jpg",
  // twitterCard: "summary_large_image",
  // twitterTitle: "Eko Aryanto | Fullstack Developer Portfolio",
  // twitterDescription: "Discover Eko Aryanto's expertise in fullstack development and view his latest projects.",
  // twitterImage: "https://www.yourdomain.com/assets/twitter-image.jpg",
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        </body>
    </html>
  );
};
