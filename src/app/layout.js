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

export const metadata = {
  title: {
    default: "Flush Force One Plumbing",
    template: "%s | Flush Force One Plumbing",
  },
  description:
    "Licensed, insured plumbing services: repairs, drain cleaning, water heaters, and emergency service.",
  applicationName: "Flush Force One Plumbing",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Flush Force One Plumbing",
    description:
      "Fast, friendly plumbing help. Drain clogs, leaks, water heaters, and more.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
