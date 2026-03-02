import querystring from "querystring";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=5";

export const revalidate = 0;

async function getAccessToken() {
    const basic = Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
        }),
    });

    if (!response.ok) throw new Error("Token refresh failed");
    return response.json();
}

export async function GET() {
    try {
        const { access_token } = await getAccessToken();
        const headers = { Authorization: `Bearer ${access_token}` };

        const [nowRes, recentRes] = await Promise.all([
            fetch(NOW_PLAYING_ENDPOINT, { headers }),
            fetch(RECENTLY_PLAYED_ENDPOINT, { headers }),
        ]);

        let nowPlaying = null;
        if (nowRes.status === 200) {
            const data = await nowRes.json();
            if (data.is_playing && data.currently_playing_type === "track") {
                nowPlaying = {
                    title: data.item.name,
                    artist: data.item.artists[0].name,
                    image: data.item.album.images[0].url,
                    link: data.item.external_urls.spotify,
                };
            }
        }

        let recentTrack = null;
        if (!nowPlaying && recentRes.ok) {
            const data = await recentRes.json();
            const track = data.items?.find((item) => !item.track.explicit);
            if (track) {
                recentTrack = {
                    title: track.track.name,
                    artist: track.track.artists[0].name,
                    image: track.track.album.images[0].url,
                    link: track.track.external_urls.spotify,
                    playedAt: track.played_at,
                };
            }
        }

        return Response.json({ nowPlaying, recentTrack });
    } catch (error) {
        console.error("Spotify API error:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
