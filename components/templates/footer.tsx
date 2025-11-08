export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="text-center">
          © {new Date().getFullYear()} Rohithreacts.Dev All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <a
            href="#connect"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
