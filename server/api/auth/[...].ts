import SpotifyProvider from 'next-auth/providers/spotify'
import { NuxtAuthHandler } from '#auth'
export default NuxtAuthHandler({
    providers: [
        SpotifyProvider.default({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.SECRET,
})