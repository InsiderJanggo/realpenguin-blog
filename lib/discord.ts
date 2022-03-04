
const getUser = async(id: string) => {
    const res = await fetch(`https://discord.com/api/v9/users/${id}`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
    });
    return res.json();
}

const getUserAvatar = async(id: string, avatar: string) => {
    const res = await fetch(`https://cdn.discordapp.com/avatars/${id}/${avatar}`);

    return res.json()
}

export {
    getUser,
    getUserAvatar
}