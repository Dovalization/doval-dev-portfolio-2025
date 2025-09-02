import Link from "next/link";
import { cn } from "@/lib/utils";

interface NotFoundWarningProps {
  homeHref?: string;
  className?: string;
}

export default function NotFoundWarning({
  homeHref = "/en",
  className,
}: NotFoundWarningProps) {
  return (
    <div
      className={cn(
        "bg-dark-primary text-light-primary flex min-h-screen items-center justify-center",
        className,
      )}
    >
      <div className="mx-4 text-center">
        <div className="mb-8">
          <h1 className="text-orange-secondary mb-4 text-6xl font-bold md:text-8xl">
            404
          </h1>
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">
            Page Not Found
          </h2>
          <p className="text-light-secondary text-lg md:text-xl">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href={homeHref}
            className={cn(
              "flex min-h-[44px] min-w-[44px] transform touch-manipulation items-center justify-center rounded-lg px-6 py-3 text-base font-bold shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3 sm:text-lg",
              "bg-orange-secondary text-dark-primary hover:bg-orange-primary",
            )}
          >
            Go Home
          </Link>
          <Link
            href="javascript:history.back()"
            className={cn(
              "flex min-h-[44px] min-w-[44px] transform touch-manipulation items-center justify-center rounded-lg px-6 py-3 text-base font-bold shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3 sm:text-lg",
              "text-orange-secondary border-orange-secondary hover:bg-orange-secondary hover:text-dark-primary border-2 bg-transparent",
            )}
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
