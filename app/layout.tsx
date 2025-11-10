import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";
import TawkWidget from "@/components/tawkwidge";


const MainFont = Inter({ subsets: ["latin"] });
const RobotoFont = Roboto({
  subsets: ["latin"], variable: "--font-roboto",
  weight: ["100", "400", "700"],
});
const Roboto_MonoFont = Roboto_Mono({
  subsets: ["latin"], variable: "--font-roboto-mono",
  weight: ["100", "400", "700"],
});
const Roboto_SerifFont = Roboto_Serif({
  subsets: ["latin"], variable: "--font-roboto-serif",
  weight: ["100", "400", "700"],
});

//Metadata
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
      <body className={cn(MainFont.className, RobotoFont.variable ,Roboto_MonoFont.variable,
          Roboto_SerifFont.variable )}>
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
        <TawkWidget />
      </body>
    </html>
  );
}
