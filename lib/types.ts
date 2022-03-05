export type DiscordUser = {
    id: string,
	username: string,
	avatar: string,
	discriminator: string,
	public_flags: number,
	banner?: string,
	banner_color: string,
	accent_color: number
}