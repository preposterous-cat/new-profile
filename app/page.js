import { Button } from "@/components/ui/button";
import background from "@/public/img/bg_first.png";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        backgroundImage: `url(/img/bg_first.png)`,
        backgroundSize: "cover",
      }}
    >
      <Button>Home Page</Button>
    </main>
  );
}
