import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-lg p-4 bg-white-300 text-pink-500 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-5xl text-center text-pink-500 mb-6">
          TaskyDone Helps Individuals & Teams
        </h1>
        <div className="text-4xl md:text-6xl bg-gradient-to-r from-pink-500 to-pink-200 text-white px- p-4 rounded-md pb- w-fit">
          Plan Tasks Ahead . . .
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-pink-300 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        From high rises to the home office, the way your team works is unique -
        accomplish it all with TaskyDone.
      </div>
      <Button className="bg-pink-600 mt-4" size="lg" asChild>
        <Link href={"/sign-up"}>Get TaskyDone for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
