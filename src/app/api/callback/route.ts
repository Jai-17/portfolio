import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code: code!,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
      grant_type: "authorization_code",
    }),
  });

  const data = await response.json();

  console.log("🔑 REFRESH TOKEN:", data.refresh_token);

  return NextResponse.json({ message: "Check your terminal for the refresh token." });
}
