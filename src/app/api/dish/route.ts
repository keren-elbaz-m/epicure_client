  import { NextResponse } from "next/server";
  import { dishes } from "@/data/dishes.data";

  export async function GET() {
    return NextResponse.json(dishes);
  }