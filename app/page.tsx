import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function Home() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center dark:opacity-100"
        opacity={1}
        gap={25}
        radius={1.8}
        color="#2563eb"
        glowColor="#60a5fa"
        backgroundOpacity={0}
        speedMin={0.8}
        speedMax={1.8}
        speedScale={1}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-smooth flex flex-col items-center sm:items-start gap-10">
        <div className="flex justify-center sm:justify-start w-full">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-5 text-center sm:text-left sm:items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black dark:text-zinc-50">
            To get started, edit the <span className="font-bold">page.tsx</span>{" "}
            file
          </h1>

          <p className="max-w-lg text-sm sm:text-base md:text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point? Check out{" "}
            <Link
              href="https://vercel.com/templates"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </Link>{" "}
            or the{" "}
            <Link
              href="https://nextjs.org/learn"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning Center
            </Link>
            .
          </p>

          <p className="max-w-md text-sm sm:text-base md:text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            <strong className="font-semibold">Better Auth</strong>: The most
            comprehensive authentication framework for TypeScript.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:w-auto sm:gap-6">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-6 transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logo"
              width={16}
              height={16}
            />
            Deploy
          </Link>

          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-black/20 px-6 transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </Link>

          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-black/20 px-6 transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
