import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const cookieStore = await cookies();

    cookieStore.set("preference", JSON.stringify(body));

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Erro ao salvar preferência" }, { status: 500 });
  }
}
