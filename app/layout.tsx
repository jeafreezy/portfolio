import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import AppLayout from "@/components/AppLayout";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Jolaiya - Geospatial Software Engineer.",
  description:
    "Emmanuel is an earth observation and geospatial software engineer...",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
      <GoogleAnalytics
        gaId={String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)}
      />
    </html>
  );
}
