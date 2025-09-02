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

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({ className }: LanguageSelectorProps) {
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
          "w-20 sm:w-24 !bg-dark-primary dark:!bg-dark-primary border-gray-700 text-gray-light hover:!bg-gray-800 dark:hover:!bg-gray-800 hover:text-orange-secondary focus:ring-orange-secondary focus:ring-offset-dark-primary focus:border-orange-secondary transition-colors duration-200", 
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
      <SelectContent className="bg-dark-primary border-gray-700 shadow-xl">
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className={cn(
              "text-gray-light hover:bg-gray-800 hover:text-orange-secondary focus:bg-gray-800 focus:text-orange-secondary cursor-pointer transition-colors duration-200",
              currentLocale === language.code && "text-orange-secondary bg-gray-800"
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
