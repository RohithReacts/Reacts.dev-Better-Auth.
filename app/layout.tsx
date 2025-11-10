import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohithreacts",
  description:
    "Simple starter pack for Better Auth, with Shadcn, Drizzle, and Neon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme>
            <div className="flex min-h-screen w-full flex-col font-(family-name:--font-inter-tight)">
              <div className="relative mx-auto w-full w-screen-xl flex-1 px-4 pt-20">
                
                {children}

                <Toaster />
              </div>
            </div>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
