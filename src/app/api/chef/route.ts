  import { NextResponse } from "next/server";
  import { chefs } from "@/data/chefs.data";

  export async function GET() {
    return NextResponse.json(chefs);
  }