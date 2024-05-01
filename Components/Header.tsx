'use Client'
// import { useAuth } from "@clerk/nextjs";
import { brainwave } from "../assets";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const Header = () => {
  // const { isSignedIn } = useAuth();

  return (
    <header
      className={`fixed top-0 left-0 w-full py-5 z-50 border-b border-n-6 lg:bg-n-8/90 lg-backdrop-blur-sm "bg-n-8/90 backdrop-blur-sm"`}
    >
      <div className="flex justify-between items-center px-5 lg-px-7.5 xl:px-10 max-lg:py-4">
        <Link href="/" className="flex items-center xl:mr-8">
          <div className="relative h-8 w-8 mr-4">
            <Image fill src={brainwave} alt="Logo" />
          </div>
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>NeuroNest</h1>
        </Link>
        <Button className="hidden lg:flex" white={false}>
          <p className="text-white hover:text-purple-400">Get Started</p>
        </Button>
        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
