type TwitterData = {
    tags?: string;
    name?: string;
    url?: string;
}

export default interface IUser {
    name?: string,
    image?: string,
    tags?: string[],
    desc?: string
    twitter?: TwitterData;
}