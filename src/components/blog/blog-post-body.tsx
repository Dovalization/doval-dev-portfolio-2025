import type { ReactNode } from "react";
import SectionDivider from "@/components/section-divider";

export default function BlogPostBody({ content }: { content: ReactNode }) {
  return (
    <div className="prose-blog gap-y-10">
      <SectionDivider size="lg" />
      {content}
    </div>
  );
}
