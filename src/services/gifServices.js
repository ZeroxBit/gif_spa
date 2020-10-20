import instance from "./conecction";


export const getRandomGif = async () => {
    const random = "random";
    const result = await instance.get(random);

    console.log("result", result)
    return result;
}

export const getTrendingServices = async () => {
    const trending = "trending";
    const result = await instance.get(trending);

    console.log("trending", result)
    return result;
}
