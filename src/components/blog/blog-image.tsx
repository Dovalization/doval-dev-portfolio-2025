"use client";
import { useState } from "react";
import NextImage from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface BlogImageProps {
  src?: string;
  alt?: string;
}

export function BlogImageComponent({ src, alt }: BlogImageProps) {
  const [open, setOpen] = useState(false);

  if (!src) return null;

  return (
    <>
      <figure className="my-4">
        <NextImage
          src={src}
          alt={alt ?? ""}
          width={1200}
          height={800}
          className="h-auto w-full cursor-zoom-in rounded-lg"
          unoptimized={src.startsWith("http")}
          onClick={() => setOpen(true)}
        />
        {alt && (
          <figcaption className="text-gray-light mt-4 text-left text-sm italic">
            {alt}
          </figcaption>
        )}
      </figure>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-6xl border-none bg-transparent p-0 shadow-none"
          showCloseButton={false}
          aria-describedby={undefined}
        >
          <VisuallyHidden asChild>
            <DialogTitle>{alt ?? "Image"}</DialogTitle>
          </VisuallyHidden>
          <NextImage
            src={src}
            alt={alt ?? ""}
            width={1200}
            height={900}
            className="h-auto w-full cursor-zoom-out rounded-lg"
            unoptimized={src.startsWith("http")}
            onClick={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
