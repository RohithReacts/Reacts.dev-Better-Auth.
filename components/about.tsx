"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function AboutMe() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-20"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700 shrink-0"
      >
        <Image
          src="/rohith.png"
          alt="Rohith Kumar"
          width={324}
          height={324}
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 md:mt-0 md:ml-12 max-w-2xl text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
          Simple Starter Pack
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          This starter pack combines<span className="font-semibold"> Better Auth</span> Shadcn UI
          , and Drizzle ORM with a serverless Neon Postgres database to provide a clean and modern development setup.

          <span className="font-medium">It includes essential features like</span>{" "}
          <span className="font-medium">Login , </span>Signup
         a personal
        </p>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
         Dashboard  and a working Todo App giving you everything you need to start building without worrying about boilerplate or configuration
         Fast to start Easy to scale Developer-friendly from day one.
        </p>

       
      </motion.div>
    </motion.section>
  );
}