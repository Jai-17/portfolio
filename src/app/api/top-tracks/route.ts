/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccessToken } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const access_token = await getAccessToken();

  const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch top tracks" }, { status: res.status });
  }

  const data = await res.json();

  const topTracks = data.items.map((track: any) => ({
    title: track.name,
    artist: track.artists.map((a: any) => a.name).join(", "),
    albumImageUrl: track.album.images?.[0]?.url,
    songUrl: track.external_urls.spotify,
  }));

  return NextResponse.json(topTracks);
}
