
import { LoginForm } from "@/components/forms/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-full max-w-sm flex-col gap-6">
      
        <LoginForm />
      </div>
    </div>
  )
}

