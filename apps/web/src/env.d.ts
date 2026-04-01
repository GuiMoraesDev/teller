/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_API_URL: string;
	readonly PUBLIC_ENV: string;
	readonly PUBLIC_GITHUB_TOKEN: string;
	readonly PUBLIC_GOOGLE_CLIENT_ID: string;
	readonly PUBLIC_SUPABASE_URL: string;
	readonly PUBLIC_SUPABASE_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
