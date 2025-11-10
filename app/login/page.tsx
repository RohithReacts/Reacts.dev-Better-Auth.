import { LoginForm } from "@/components/forms/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm px-4">
        <LoginForm />
      </div>
    </div>

  );
}




   

