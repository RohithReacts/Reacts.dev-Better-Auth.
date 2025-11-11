import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <div className={`${inter.className} h-screen w-screen`}>
      <Image
        src="/404.jpg"
        alt="Page not found illustration"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          404 - Page Not Found
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="
            px-4 py-2 sm:px-5 sm:py-3 
            bg-blue-600 text-white 
            text-sm sm:text-base md:text-lg 
            rounded-lg shadow 
            hover:bg-blue-700 transition
          "
        >
          Go Home
        </Link>

      </div>
    </div>
  );
}
