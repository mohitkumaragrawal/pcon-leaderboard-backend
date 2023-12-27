import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cfHandles = await prisma.cf_account.findMany();
    return new Response(JSON.stringify(cfHandles), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (err) {
    return new NextResponse("error fetching cf handles", { status: 500 });
  }
}
