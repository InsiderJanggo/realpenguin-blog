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

export enum Form {
	Initial,
	Loading,
	Success,
	Error
}

export type FormState = {
	state: Form;
	message?: string;
};
  