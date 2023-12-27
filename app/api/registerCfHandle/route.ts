import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface BodyType {
  cf_handle: string;
  name: string;
  email: string;
  regno: string;
  batch: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as BodyType;

  const { cf_handle, name, email, regno, batch } = body;
  try {
    const cfUser = await prisma.cf_account.create({
      data: {
        cf_handle: cf_handle,
        name: name,
        email: email,
        regno: regno,
        batch: +batch,
      },
    });
    return new NextResponse(JSON.stringify(cfUser), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (err) {
    return new NextResponse("error registering cf id", { status: 500 });
  }
}
