import { Days_One } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import BottomBar from "@/components/main/layout/bottombar";

const inter = Days_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Home | Ariel's Page",
  description: "Home Page",
  icons: {
    icon: "/img/me9.png",
  },
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
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
