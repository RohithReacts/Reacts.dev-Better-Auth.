"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { Badge, Button } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import {
  PasswordInput,
  PasswordInputStrengthChecker,
} from "../ui/password-input";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
    <div
      className={cn(
        "flex flex-col gap-6 text-black dark:text-neutral-200",
        className
      )}
      {...props}
    >
      <Card className="border bg-white text-black shadow-sm dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700">
        <CardHeader className="text-center">
          <Link
            href="/login"
            className="flex justify-center items-center space-x-2 group"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/logo123.png"
                alt="Reacts Logo"
                fill
                className="object-contain rounded-full transition-transform duration-300 group-hover:rotate-35"
              />
            </div>
            <span className="text-2xl font-sans transition-colors">
              Reacts.dev
            </span>
          </Link>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-neutral-700 dark:text-neutral-300">
                            Email
                          </FormLabel>
                          {lastMethod === "email" && (
                            <Badge color="gray" variant="soft" size="2">
                              last used
                            </Badge>
                          )}
                        </div>
                        <FormControl>
                          <Input
                            placeholder="helloworld@gmail.com"
                            {...field}
                          />
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
                        <FormLabel className="text-neutral-700 dark:text-neutral-300">
                          Password
                        </FormLabel>
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

                  <Button
                    color="gray"
                    variant="classic"
                    highContrast
                    type="submit"
                    size="3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      "Continue"
                    )}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="font-medium">
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
