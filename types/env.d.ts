declare global {
    declare namespace NodeJS {
        interface ProcessEnv {
            readonly NODE_ENV: 'development' | 'production' | 'test'
            SPOTIFY_CLIENT_SECRET: string;
            SPOTIFY_CLIENT_ID: string;
            TWITTER_API_KEY: string;
            TWITTER_API_KEY_SECRET: string;
            BAERER_TOKEN: string;
            DISCORD_BOT_TOKEN: string;
        }
    }
}

export {}