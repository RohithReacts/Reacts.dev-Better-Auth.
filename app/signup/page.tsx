import { SignupForm } from "@/components/forms/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create a new account',
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
<div className="w-full max-w-sm px-4">
      <SignupForm />
      </div>
    </div>
      
  );
}
