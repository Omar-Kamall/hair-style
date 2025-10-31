import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./layout/Footer";
import Banal from "./layout/Panal";
import TopNav from "./layout/Header/TopNav";
import MainNav from "./layout/Header/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "هير استايل",
  description: "صالون رجالي قصًات عصرية وتجربة راقية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/webp"
          href="/assets/imgs/hairstyle_logo_bgwhitewebp.webp"
        />
      </head>
      <body
        dir="rtl"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        <MainNav />
        <Banal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
