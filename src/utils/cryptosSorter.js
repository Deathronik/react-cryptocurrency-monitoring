import {setCryptos} from "../reducers/cryptosReducer";

export const sortCryptos = (key, key2, cryptos, sortOrder, setSortOrder, dispatch, setSortBy) => {

    const sortedCryptos = cryptos.slice()

    setSortBy(key2 === 'volume' ? 'volume' : key)

    if (key2) {
        if (key === 'name' && sortOrder === 'desc') {
            sortedCryptos.sort((a, b) => a[key][key2] > b[key][key2] ? 1 : -1)
        } else if (key === 'name' && sortOrder === 'asc') {
            sortedCryptos.sort((a, b) => a[key][key2] > b[key][key2] ? -1 : 1)
        } else if (sortOrder === 'asc') {
            sortedCryptos.sort((a, b) => Number(a[key][key2]) > Number(b[key][key2]) ? -1 : 1)
        } else {
            sortedCryptos.sort((a, b) => Number(a[key][key2]) > Number(b[key][key2]) ? 1 : -1)
        }
    } else {
        if (key === 'name' && sortOrder === 'desc') {
            sortedCryptos.sort((a, b) => a[key] > b[key] ? 1 : -1)
        } else if (key === 'name' && sortOrder === 'asc') {
            sortedCryptos.sort((a, b) => a[key] > b[key] ? -1 : 1)
        } else if (sortOrder === 'asc') {
            sortedCryptos.sort((a, b) => Number(a[key]) > Number(b[key]) ? -1 : 1)
        } else {
            sortedCryptos.sort((a, b) => Number(a[key]) > Number(b[key]) ? 1 : -1)
        }
    }
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    dispatch(setCryptos(sortedCryptos))
}