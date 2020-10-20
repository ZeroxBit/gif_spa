import instance from "./conecction";


export const getRandomGif = async () => {
    const random = "random";
    const result = await instance.get(random);

    return result;
}

export const getTrendingServices = async (offset = 0) => {
    const trending = "trending";
    const result = await instance.get(trending, {offset});

    return result;
}
