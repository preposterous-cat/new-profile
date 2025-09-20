import { Days_One } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const inter = Days_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
    title: "Layanan Mobile",
    description: "Home Page",
    icons: {
        icon: "/img/me9.png",
    },
};

const LayananMobileLayout = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-white antialiased",
                    inter.className
                )}

            >
                {children}
            </body>
        </html>

    );
};

export default LayananMobileLayout;
