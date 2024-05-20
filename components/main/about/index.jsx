/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import about_tab_data from "@/data/about_tab";
import journey from "@/data/journey";
import { FaAnglesDown, FaArrowDown, FaTurnDown } from "react-icons/fa6";

const AboutComponent = () => {
  return (
    <div className="lg:grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-self-center lg:justify-self-start">
        <Tabs defaultValue="who" className=" w-96">
          <TabsList className="grid gap-4 grid-cols-4 mb-5 bg-transparent">
            {about_tab_data?.map((item, i) => (
              <TabsTrigger
                key={i}
                className=" rounded  text-white"
                value={item.value}
                style={{
                  backgroundImage: `linear-gradient(to bottom, var(--themered), var(--thememaroon))`,
                }}
              >
                {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          {about_tab_data.map((item, i) => (
            <TabsContent key={i} value={item.value}>
              <Card className=" bg-themeblue border-thememaroon border-2 mt-16 max-h-64 overflow-auto">
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-white">
                  {item.content}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="flex flex-col justify-self-center lg:justify-self-start w-full lg:mt-0 mt-10">
        <div className=" text-3xl text-white mb-5">My Universe Timeline</div>
        <div className="md:max-h-80 max-h-52 overflow-auto">
          <ul className=" w-full timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white">
            {journey
              ?.sort((a, b) => a - b)
              .map((item, i) => (
                <li key={i}>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      i % 2 == 0 ? "timeline-start md:text-end" : "timeline-end"
                    } mb-10`}
                  >
                    <time className="font-mono italic">{item.year}</time>
                    <div className="text-lg font-medium">{item.content}</div>
                  </div>
                  <hr />
                </li>
              ))}
          </ul>
        </div>
        <div className=" grid justify-items-stretch">
          <Button className=" justify-self-center rounded-full bg-transparent border-2 border-thememaroon py-5">
            <FaAnglesDown className=" text-thememaroon  animate-bounce" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
