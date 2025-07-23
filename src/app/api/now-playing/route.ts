import { getAccessToken } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const access_token = await getAccessToken();

  const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (res.status === 204 || res.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await res.json();

  return NextResponse.json({
    isPlaying: song.is_playing,
    title: song.item.name,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    artist: song.item.artists.map((a:any) => a.name).join(", "),
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  });
}
