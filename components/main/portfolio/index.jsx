/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import skills from "@/data/skills";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import PortfolioDetail from "./detail";
import portfolios from "@/data/portfolio";
import Image from "next/image";

const PortfolioComponent = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className=" min-w-full">
      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="grid gap-4 grid-cols-2 w-[400px] bg-transparent">
          <TabsTrigger
            className="rounded text-white"
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--themered), var(--thememaroon))`,
            }}
            value="skills"
          >
            Skill
          </TabsTrigger>
          <TabsTrigger
            className="rounded text-white"
            style={{
              backgroundImage: `linear-gradient(to bottom, var(--themered), var(--thememaroon))`,
            }}
            value="project"
          >
            Project
          </TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="w-full">
          <Card className="bg-themeblue border-s-2 border-b-0 border-t-0 border-e-2 border-thememaroon">
            <CardContent className="space-y-2">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div
                  className="space-y-1 flex flex-col gap-3 mt-5 lg:me-16 p-6 rounded-xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, var(--themered), var(--thememaroon))`,
                  }}
                >
                  <p className="text-white text-3xl">
                    Grab my super ATS-friendly resume here
                  </p>
                  <a
                    href="https://drive.google.com/file/d/18UajTfLluwV3RJzUgRm4Jky9OQTwtLZ7/view?usp=drive_link"
                    target="_blank"
                  >
                    <Button className=" bg-thememaroon-muted">
                      Download CV
                    </Button>
                  </a>
                </div>
                <div className="space-y-1 lg:p-6 px-16 py-6 mt-5 w-full">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                      dragFree: true,
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full max-w-xl"
                  >
                    <CarouselContent>
                      {skills?.map((skill, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="p-1">
                            <Card className="bg-transparent border-none">
                              <CardContent className="flex aspect-square items-center justify-center p-6 flex-col text-white">
                                <span className="text-5xl font-semibold">
                                  {skill.icon}
                                </span>
                                <span className="text-3xl font-medium">
                                  {skill.name}
                                </span>
                                <span className="text-lg font-normal">
                                  {skill.level}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="project">
          <Card className="border-s-0 border-b-2 border-t-2 border-e-0 border-thememaroon bg-themeblue">
            <CardContent className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-6 gap-4 lg:max-h-[450px] max-h-[700px] overflow-auto">
              {portfolios?.map((item, i) => (
                <>
                  <div
                    key={i}
                    className="card card-compact bg-base-100 shadow-xl h-full"
                  >
                    <figure>
                      <Image
                        src={`/img/preview/${item.thumbnail}`}
                        alt="thumbnail"
                        width={400}
                        height={200}
                      />
                    </figure>
                    <div className="card-body bg-thememaroon rounded-b-xl">
                      <h2 className="card-title text-white font-normal">
                        {item.title}
                      </h2>

                      <div className="card-actions justify-end">
                        <button
                          className="btn btn-primary bg-white hover:bg-themered border-none"
                          onClick={() =>
                            document.getElementById(`modal${i}`).showModal()
                          }
                        >
                          More
                        </button>
                      </div>
                    </div>
                  </div>
                  <PortfolioDetail
                    index={i}
                    link={item.detail.link}
                    preview={item.detail.preview}
                    desc={item.detail.desc}
                  />
                </>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioComponent;
