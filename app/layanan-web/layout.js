import { Days_One } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const inter = Days_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
    title: "Layanan Website",
    description: "Home Page",
    icons: {
        icon: "/img/me9.png",
    },
};

const LayananWebLayout = ({ children }) => {
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

export default LayananWebLayout;
