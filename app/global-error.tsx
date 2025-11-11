"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    // global-error must include html and body tags
    <html>
      <body className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>

        <button
          onClick={() => reset()}
          className="px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-gray-900 transition"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
