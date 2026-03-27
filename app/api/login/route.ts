import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

type LoginBody = {
  username: string;
  password: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginBody;
    const username = body.username?.trim();
    const password = body.password?.trim();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required." },
        { status: 400 },
      );
    }

    // Look up the user record first, then compare the submitted password.
    const { data: user, error } = await supabaseAdmin
      .from("users")
      .select("id, username, password")
      .eq("username", username)
      .maybeSingle();

    if (error) {
      console.error("Supabase query error:", error.message);
      return NextResponse.json(
        { success: false, message: "Unable to process login request." },
        { status: 500 },
      );
    }

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 },
      );
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        user: {
          id: user.id,
          username: user.username,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 },
    );
  }
}
