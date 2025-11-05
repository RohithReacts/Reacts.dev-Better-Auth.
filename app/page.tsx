import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-12 px-6 py-20 bg-white dark:bg-black sm:justify-between sm:px-12 sm:py-32">
        
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* Text Content */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-black dark:text-zinc-50">
            To get started, edit the <span className="font-bold">page.tsx</span> file.
          </h1>

          <p className="max-w-lg text-base sm:text-lg leading-7 text-zinc-600 dark:text-zinc-400">
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
            </Link>.
          </p>

          <p className="max-w-md text-base sm:text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            <strong>Better Auth</strong>: The most comprehensive authentication framework
            for TypeScript.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
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

      </main>
    </div>
  );
}
