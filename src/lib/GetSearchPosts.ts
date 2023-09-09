

type Posts = {
    id: string,
    url: string,
    title: string,
    description: string,
    time_added: string,
    tags: string[]
}

type Data = {
    Data: Posts[]
}

export const GetSearchPosts = async (page: string, limit: string, search: string) => {
    const posts = await fetch(
        `https://cms.bladywebdev.pl/items/pocketposts/${limit && '?limit=' + limit}${page && '&page=' + page}&sort=-time_added${search && '&search=' + search}`
    )
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

    return posts
}