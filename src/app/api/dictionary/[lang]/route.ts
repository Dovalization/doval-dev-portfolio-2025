import { type NextRequest, NextResponse } from "next/server";
import { getContent, LocaleSchema } from "@/lib/content";

export const dynamic = "force-static";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  const locale = LocaleSchema.parse(lang);
  const data = await getContent(locale);
  return NextResponse.json(data);
}
