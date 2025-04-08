import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3 as FontSans } from "next/font/google";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Summarize - AI PDF Summarization",
  description: "Summarize is an app for summarizing your pdfs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${fontSans.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
