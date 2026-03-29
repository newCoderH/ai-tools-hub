import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getToolsByCategory } from "@/lib/mockData";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!supabase) {
    const tools = getToolsByCategory(slug);
    return NextResponse.json({ tools, source: "mock" });
  }

  const { data: tools, error } = await supabase
    .from("tools")
    .select("*, category(*)")
    .eq("category.slug", slug)
    .order("createdAt", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ tools });
}
