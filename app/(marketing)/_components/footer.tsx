import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-pink-200">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button className="text-pink-700" size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button className="text-pink-700" size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
