import { SignupForm } from "@/components/forms/signup-form";
import { ModeToggle } from "@/components/templates/darkmode";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
};

export default function SignupPage() {
  return (
     <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-10 gap-16">
    
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4">
            <Image
              src="/Adobe Express - file.png"
              alt="Login Side Illustration"
              width={420}
              height={320}
              className="object-contain w-full m-auto max-w-xs sm:max-w-sm md:max-w-md"
            />
    
            <h1 className="text-4xl sm:text-5xl font-bold mx-auto">
              Meet the Team
            </h1>
    
            <p className="font-sans text-muted-foreground mx-auto sm:text-lg max-w-md">
              A diverse group of professionals collaborating to build modern, user-friendly digital experiences.
            </p>
          </div>
    
          <div className="w-full max-w-sm relative">
            
            
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
    
            <SignupForm />
          </div>
        </div>
      
  );
}
