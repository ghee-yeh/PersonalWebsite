import getItems from "../../_components/Spotify/SpotifyAPI";

export const revalidate = 0;

export async function GET() {
    try {
        const response = await getItems(
            process.env.SPOTIFY_CLIENT_ID,
            process.env.SPOTIFY_CLIENT_SECRET,
            process.env.SPOTIFY_REFRESH_TOKEN
        );
        
        return Response.json(response);
    } catch (error) {
        console.error('Spotify API error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}