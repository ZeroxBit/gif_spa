import { MORE_DATA } from "redux/types/gifTypes"
import { getTrendingServices } from "services/gifServices";

export const moreGifAction = (offset) => async (dispatch) => {
    const result = await handleGetTrending(offset);
    return dispatch({
        type: MORE_DATA,
        payload: result
    })
}

const handleGetTrending = async (offset) => {
    const { data } = await getTrendingServices(offset);
    return data.data
}