import axios from "axios";
import {setIsFetching, setCryptos} from "../reducers/cryptosReducer";

export const getCryptos = (perPage, currentPage) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=51f1d10f69fae3fe556acce077ce01e8ebc8841f&per-page=${perPage}&page=${currentPage}&interval=1d,7d&status=active`)
            .catch((e) => console.log(e))
        response.data.map((crypto) => {
            if (crypto['1d'] === undefined)
                crypto['1d'] = {price_change_pct: 0.0, volume: 0.0}
            else if (crypto['7d'] === undefined)
                crypto['7d'] = {price_change_pct: 0.0}
            else if (crypto.market_cap === undefined)
                crypto.market_cap = 0.0

            return crypto
        })
        dispatch(setCryptos(response.data))
    }
}