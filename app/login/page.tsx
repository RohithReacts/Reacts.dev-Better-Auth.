import { LoginForm } from "@/components/forms/login-form";
import { ModeToggle } from "@/components/templates/darkmode";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-10 gap-16">

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4">
        <Image
          src="/Adobe Express - file.png"
          alt="Login Side Illustration"
          width={420}
          height={320}
          className="object-contain w-full m-auto max-w-xs sm:max-w-sm md:max-w-md"
        />

        <h1 className="text-3xl sm:text-4xl font-bold m-auto">
          Welcome Back
        </h1>

        <p className="text-muted-foreground text-base m-auto sm:text-lg max-w-md">
          Sign in to continue your journey.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-sm relative">
        
        {/* Dark Mode Toggle */}
        <div
          className="
            fixed
            top-4 right-4
            sm:top-6 sm:right-8
            md:top-6 md:right-10
            lg:top-8 lg:right-12
          "
        >
          <ModeToggle />
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
