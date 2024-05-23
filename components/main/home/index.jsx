import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const HomeComponent = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16 md:py-32 lg:py-24 px-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        <div className=" flex justify-start">
          <div className="flex flex-col lg:text-start text-center">
            <h1 className="text-3xl lg:text-5xl text-white">Hello, I am</h1>

            <h1 className="text-2xl lg:text-5xl text-balance text-thememaroon-muted">
              <Typewriter
                words={[
                  "Arizli Romadhon",
                  "a Web Developer",
                  "a Full Stack Developer",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </h1>

            <p className=" mt-10 lg:mt-20 text-white">
              A dedicated{" "}
              <span className=" text-thememaroon-muted">web developer</span>{" "}
              proficient in both{" "}
              <span className=" text-thememaroon-muted">backend</span> and{" "}
              <span className=" text-thememaroon-muted">frontend</span>{" "}
              development. Passionate about technology and aesthetics
            </p>

            <div className="flex flex-row gap-4 mt-10 lg:justify-start justify-center">
              <Button className=" border-2 border-thememaroon hover:bg-thememaroon bg-themeblue text-white">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:mt-0 mt-20">
          <Image alt="me" src={"/img/me9.png"} width={350} height={300} />{" "}
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
