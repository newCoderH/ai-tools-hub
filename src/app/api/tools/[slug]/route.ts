import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getToolBySlug } from "@/lib/mockData";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!supabase) {
    const tool = getToolBySlug(slug);
    if (!tool) {
      return NextResponse.json({ error: "Tool not found" }, { status: 404 });
    }
    return NextResponse.json({ tool, source: "mock" });
  }

  const { data: tool, error } = await supabase
    .from("tools")
    .select("*, category(*)")
    .eq("slug", slug)
    .single();

  if (error || !tool) {
    return NextResponse.json({ error: "Tool not found" }, { status: 404 });
  }

  return NextResponse.json({ tool });
}
