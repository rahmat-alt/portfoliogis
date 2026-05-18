import Link from "next/link";

const Footer = () => {
  return (
    <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-2 px-4 sm:px-7 py-6 md:py-8 text-center">
            <p className="text-base sm:text-lg font-medium text-foreground">
              contact me from GMail
            </p>

            {/* Tautan langsung ke Gmail */}
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=emailkamu@gmail."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-lg sm:text-xl font-bold tracking-tight transition-colors"
            >
              rahmatthidayat0120@gmail.com↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
