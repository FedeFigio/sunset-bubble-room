import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Bubble Room - Un'esperienza unica sotto le stelle",
  description: "Scopri il lusso e la magia di dormire sotto le stelle nelle nostre esclusive bubble room. Un'esperienza indimenticabile immersa nella natura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white dark:bg-black min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}