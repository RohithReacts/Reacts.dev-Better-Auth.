"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "@/server/users";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { PasswordInput, PasswordInputStrengthChecker } from "../ui/password-input";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [lastMethod, setLastMethod] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Fetch last login method
  useEffect(() => {
    const fetchLastMethod = async () => {
      try {
        const methodFromClient = await authClient.getLastUsedLoginMethod?.();
        const methodFromStorage = localStorage.getItem("lastLoginMethod");
        setLastMethod(methodFromStorage || methodFromClient || null);
      } catch {
        setLastMethod(null);
      }
    };
    fetchLastMethod();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInWithGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
      localStorage.setItem("lastLoginMethod", "google");
    } catch {
      toast.error("Google sign-in failed");
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const { success, message } = await signIn(values.email, values.password);

    if (success) {
      toast.success(message as string);
      localStorage.setItem("lastLoginMethod", "email");
      router.push("/dashboard");
    } else {
      toast.error(message as string);
    }

    setIsLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6 text-black dark:text-neutral-200", className)} {...props}>
      <Card className="border bg-white text-black shadow-sm dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700">
        <CardHeader className="text-center">
          <Link href="/login" className="flex justify-center items-center space-x-2 group">
            <div className="relative w-12 h-12">
              <Image
                src="/logo123.png"
                alt="Reacts Logo"
                fill
                className="object-contain rounded-full transition-transform duration-300 group-hover:rotate-35"
              />
            </div>
            <span className="text-xl font-semibold transition-colors">
              Reacts.dev
            </span>
          </Link>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-6">

                {/* Google Login */}
                <Button
                  variant="outline"
                  className="w-fit flex justify-center items-center relative cursor-pointer border-neutral-300 dark:border-neutral-700 dark:text-neutral-200"
                  type="button"
                  onClick={signInWithGoogle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 mr-2"
                  >
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>

                  {lastMethod === "google" && (
                    <Badge className="absolute left-15 text-[9px]">last used</Badge>
                  )}
                </Button>

                {/* Email / Password */}
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-neutral-700 dark:text-neutral-300">Email</FormLabel>
                          {lastMethod === "email" && (
                            <Badge className="text-[9px]">last used</Badge>
                          )}
                        </div>
                        <FormControl>
                          <Input placeholder="helloworld@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 dark:text-neutral-300">Password</FormLabel>
                        <FormControl>
                          <PasswordInput placeholder="********" {...field}>
                            <PasswordInputStrengthChecker />
                          </PasswordInput>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Link href="/forgot-password" className="ml-auto text-sm">
                    Forgot your password?
                  </Link>

                  <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
                    {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Login"}
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" >
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
