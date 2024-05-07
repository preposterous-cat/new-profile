"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import menu_data from "@/data/menu";
import { useState } from "react";
import Link from "next/link";

const BottomBar = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <nav className="absolute bottom-0 left-0 mb-5 flex w-screen overflow-x-auto">
      {/* <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4" />
      </Button> */}

      <div className="stepper-wrapper pt-10">
        {menu_data.map((item, i) => (
          <div key={i} className="stepper-item">
            <label
              className={`mb-2 rounded-full animate-bounce bg-themered text-white text-sm py-1 px-2 ${
                pageIndex == i ? "visible" : "invisible"
              }`}
            >
              {item.name}
            </label>
            <Link href={item.link}>
              <Button
                className={`step-counter text-lg rounded-full mx-5 py-6 text-white `}
                variant="link"
                style={
                  pageIndex == i
                    ? {
                        backgroundImage: `linear-gradient(to bottom, var(--themered), var(--thememaroon))`,
                      }
                    : {
                        backgroundImage: `linear-gradient(to bottom, var(--thememaroon-muted), var(--thememaroon-muted))`,
                      }
                }
                onClick={() => setPageIndex(i)}
              >
                {item.icon}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      {/* <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button> */}
    </nav>
  );
};

export default BottomBar;
