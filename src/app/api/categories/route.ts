import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getAllCategories } from "@/lib/mockData";

export async function GET() {
  if (!supabase) {
    const categories = getAllCategories();
    return NextResponse.json({ categories, source: "mock" });
  }

  const { data: categories, error } = await supabase
    .from("categories")
    .select("*, tools(count)")
    .order("name");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ categories });
}
