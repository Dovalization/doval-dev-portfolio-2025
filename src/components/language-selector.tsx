"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function LanguageSelector({ className }: {
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current locale from pathname
  const currentLocale = pathname.startsWith("/pt") ? "pt" : "en";

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "🇺🇸",
      shortName: "EN",
    },
    {
      code: "pt",
      name: "Português",
      flag: "🇧🇷",
      shortName: "PT",
    },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (value: string) => {
    const localeCode = value as "en" | "pt";
    // Navigate to the same page but with different locale
    const newPath = `/${localeCode}`;
    router.push(newPath);
  };

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger 
        className={cn(
          "w-20 sm:w-24 bg-background border-border text-muted-foreground hover:bg-muted hover:text-accent-foreground focus:ring-primary focus:border-primary transition-colors duration-200", 
          className
        )} 
        size="sm"
      >
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-sm">{currentLanguage.flag}</span>
            <span className="hidden sm:inline text-sm font-medium">
              {currentLanguage.shortName}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-popover border-border shadow-xl">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className={cn(
              "text-muted-foreground hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground cursor-pointer transition-colors duration-200",
              currentLocale === language.code && "text-accent-foreground bg-muted"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
