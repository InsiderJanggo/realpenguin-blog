type AuthorData = {
    name?: string;
    img?: string;
}

type CategoryData = {
    color?: string;
    name?: string;
}

export default interface IPost {
    title?: string;
    slug?: string;
    content?: string;
    author?: AuthorData;
    desc?: string;
    image?: string;
    category?: CategoryData;
    createdAt?: string;
}
