import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getToolBySlug } from "@/lib/mockData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const a = searchParams.get("a");
  const b = searchParams.get("b");

  if (!a || !b) {
    return NextResponse.json(
      { error: "Missing a or b query parameter" },
      { status: 400 }
    );
  }

  if (!supabase) {
    const toolA = getToolBySlug(a);
    const toolB = getToolBySlug(b);
    if (!toolA || !toolB) {
      return NextResponse.json({ error: "One or both tools not found" }, { status: 404 });
    }
    return NextResponse.json({ tools: [toolA, toolB], source: "mock" });
  }

  const { data: tools, error } = await supabase
    .from("tools")
    .select("*, category(*)")
    .in("slug", [a, b]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!tools || tools.length < 2) {
    return NextResponse.json({ error: "One or both tools not found" }, { status: 404 });
  }

  return NextResponse.json({ tools });
}
