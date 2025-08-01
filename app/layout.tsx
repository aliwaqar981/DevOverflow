import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import { Inter } from "next/font/google";
import LocalFonts from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = LocalFonts({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: `A community driven platform for asking and answering programming questions. Get help, share knowledge 
  and collaborate with developers from arount the world. Explore topics in web development, mobile app development, 
  data structures, and more.`,
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
