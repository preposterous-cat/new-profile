import { Days_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BottomBar from "@/components/main/layout/bottombar";

const inter = Days_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Home Page",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
        style={{
          backgroundImage: `url(/img/bg.svg)`,
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
