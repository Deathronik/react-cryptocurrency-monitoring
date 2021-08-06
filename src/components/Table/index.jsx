import React, {useEffect, useState} from 'react';
import {getCryptos} from '../../actions/cryptoData';
import {useDispatch, useSelector} from 'react-redux';
import Crypto from './Crypto';
import styles from './Table.module.scss'
import {setCurrentPage, setPerPage} from "../../reducers/cryptosReducer";
import {sortCryptos} from "../../utils/cryptosSorter";
import {generatePages} from "../../utils/pagesCreator";

const Table = () => {
    const dispatch = useDispatch()
    const cryptos = useSelector(state => state.cryptos.items)
    const isFetching = useSelector(state => state.cryptos.isFetching)
    const perPage = useSelector(state => state.cryptos.perPage)
    const currentPage = useSelector(state => state.cryptos.currentPage)
    const totalCount = useSelector(state => state.cryptos.totalCount)
    const [sortOrder, setSortOrder] = useState('asc')
    const [sortBy, setSortBy] = useState('')
    const pagesCount = Math.ceil(totalCount / perPage)

    const pages = []
    generatePages(pagesCount, pages, currentPage)

    useEffect(() => {
        dispatch(getCryptos(perPage, currentPage))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [perPage, currentPage])

    const onClickPageHandler = (page) => {
        setSortBy('')
        setSortOrder('asc')
        dispatch(setCurrentPage(page))
    }

    return (
        <div className={styles.tableWrapper}>
            {isFetching === true ?
                <div className={styles.loader}>
                    <div/>
                    <div/>
                </div> :
                <table>
                    <thead className={styles.tableHead}>
                    <tr>
                        <th onClick={() => sortCryptos('rank', null, cryptos, sortOrder, setSortOrder, dispatch, setSortBy)}
                            className={styles.rank}># {sortBy === 'rank' &&
                        <span className={styles.sortOrder}>{sortOrder}</span>}</th>
                        <th onClick={() => sortCryptos('name', null, cryptos, sortOrder, setSortOrder, dispatch, setSortBy)}>Name {sortBy === 'name' &&
                        <span className={styles.sortOrder}>{sortOrder}</span>}</th>
                        <th onClick={() => sortCryptos('price', null, cryptos, sortOrder, setSortOrder, dispatch, setSortBy)}>Price {sortBy === 'price' &&
                        <span className={styles.sortOrder}>{sortOrder}</span>}</th>
                        <th onClick={() => sortCryptos('1d', 'price_change_pct', cryptos, sortOrder, setSortOrder, dispatch, setSortBy)}>24h
                            % {sortBy === '1d' &&
                            <span className={styles.sortOrder}>{sortOrder}</span>}</th>
                        <th onClick={() => sortCryptos('7d', 'price_change_pct', cryptos, sortOrder, setSortOrder, dispatch, setSortBy)}>7d
                            % {sortBy === '7d' &&
                            <span className={styles.sortOrder}>{sortOrder}</span>}</th>
                        <th onClick={() => sortCryptos('market_cap', null, cryptos, sortOrder, setSortOrder, dispatch, setSortBy)}>Market
                            Cap {sortBy === 'market_cap' &&
                            <span className={styles.sortOrder}>{sortOrder}</span>}</th>
                        <th onClick={() => sortCryptos('1d', 'volume', cryptos, sortOrder, setSortOrder, dispatch, setSortBy)}>Volume(24h) {sortBy === 'volume' &&
                        <span className={styles.sortOrder}>{sortOrder}</span>}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cryptos.map((crypto) => <Crypto crypto={crypto} key={crypto.id}/>)}
                    </tbody>
                </table>}
            <div className={styles.tableBottom}>
                <ul className={styles.pages}>
                    <li className={styles.page} onClick={() => onClickPageHandler(1)}>{'<'}</li>
                    {pages.map((page) =>
                        <li className={page === currentPage ? styles.currentPage : styles.page}
                            onClick={() => onClickPageHandler(page)}
                            key={page}>{page}</li>)
                    }
                    <li className={styles.page} onClick={() => onClickPageHandler(pagesCount)}>{'>'}</li>
                </ul>
                <div className={styles.chooserRows}>
                    <span>Show rows: </span>
                    <select onChange={(e) => dispatch(setPerPage(e.target.value))} name="rows">
                        <option value={100}>100</option>
                        <option value={50}>50</option>
                        <option value={20}>20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Table;