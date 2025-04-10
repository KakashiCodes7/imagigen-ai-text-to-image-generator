import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { LinkIcon } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEXT TO IMAGE GENERATOR",
  description: "Lightning fast SDXL API demo by fal.ai",
  authors: [{ name: "fal.ai", url: "https://fal.ai" }],
  metadataBase: new URL("https://fastsdxl.ai"),
  openGraph: {
    images: "/og_thumbnail.jpeg",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons.ico" type="image/x-icon" />
      </head>

      <body
        className={inter.className}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
