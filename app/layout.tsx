import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const MainFont = Inter({ subsets: ["latin"] });
const RobotoFont = Roboto({
  subsets: ["latin"], variable: "--font-roboto",
  weight: "100"
});

export const metadata: Metadata = {
  title: "Jihee Kim",
  description: "Jihee Kim official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, RobotoFont.variable )}>
        {children}
      </body>
    </html>
  );
}
