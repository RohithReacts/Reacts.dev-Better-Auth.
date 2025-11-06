import { SignupForm } from "@/components/forms/signup-form"


export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-sm flex-col gap-6">
       
        <SignupForm />
      </div>
    </div>
  )
}
