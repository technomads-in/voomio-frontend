import { API_URL } from "../utils/Constants";
// import { getAuthHeader } from "./Header";

const TRADES_API_URL = API_URL + "/trades";

export const addTradeAPI = async (obj) => {
    const requestOptions = {
        method: 'POST',
        // headers: getAuthHeader(true),
        body: JSON.stringify(obj)
    };

    let res = await fetch(TRADES_API_URL + "/", requestOptions);
    return res.json()
}