const SET_CRYPTOS = "SET_CRYPTOS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_PER_PAGE = "SET_PER_PAGE"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"

const defaultState = {
    items: [],
    isFetching: true,
    perPage: 100,
    currentPage: 1,
    totalCount: 8700
}

export default function cryptosReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CRYPTOS:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }

        case SET_PER_PAGE:
            return {
                ...state,
                perPage: action.payload
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }

        default:
            return state
    }
}

export const setCryptos = (cryptos) => ({type: SET_CRYPTOS, payload: cryptos})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setPerPage = (pagesCount) => ({type: SET_PER_PAGE, payload: pagesCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount})