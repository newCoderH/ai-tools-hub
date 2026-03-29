import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getAllTools } from "@/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (!supabase) {
    // Fallback to mock data when Supabase is not configured
    let tools = getAllTools();
    if (category) {
      tools = tools.filter((t) => t.categorySlug === category);
    }
    return NextResponse.json({ tools, source: "mock" });
  }

  let query = supabase
    .from("tools")
    .select("*, category(*)")
    .order("createdAt", { ascending: false });

  if (category) {
    query = query.eq("category.slug", category);
  }

  const { data: tools, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ tools });
}
