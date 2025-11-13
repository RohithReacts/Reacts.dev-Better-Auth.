import { LoginForm } from "@/components/forms/login-form";
import { ModeToggle } from "@/components/templates/darkmode";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm px-4">
        <div
          className="
    fixed 
    top-4 right-4         
    sm:top-6 sm:right-8   
    md:top-6 md:right-12  
    lg:top-8 lg:right-20  
  "
        >
          <ModeToggle />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
