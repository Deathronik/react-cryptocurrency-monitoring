import React from 'react';
import styles from './Crypto.module.scss'

const Crypto = ({crypto}) => {
    return (
        <tr className={styles.tableData}>
            <th>{crypto.rank}</th>
            <td>
                <div className={styles.name}>
                    <img width={24} height={24} src={crypto.logo_url} alt="Logo"/> <span>{crypto.name}</span> <span
                    className={styles.currency}>{crypto.currency}</span>
                </div>
            </td>
            <td>
                <span className={styles.price}>$ {Number(crypto.price).toLocaleString('us-US')}</span>
            </td>
            <td>
                <span
                    className={crypto['1d'].price_change_pct * 100 < 0 ? styles.red : styles.green}>{crypto['1d'].price_change_pct * 100 < 0 ?
                    <svg className={styles.caretDown} width="10px" height="10px" viewBox="0 0 16 16"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg> :
                    <svg width="10px" height="10px" viewBox="0 0 16 16"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                }{Number(crypto['1d'].price_change_pct * 100).toLocaleString('us-US')}%</span>
            </td>
            <td>
                <span
                    className={crypto['7d'].price_change_pct * 100 < 0 ? styles.red : styles.green}>{crypto['7d'].price_change_pct * 100 < 0 ?
                    <svg className={styles.caretDown} width="10px" height="10px" viewBox="0 0 16 16"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg> :
                    <svg width="10px" height="10px" viewBox="0 0 16 16"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                }{Number(crypto['7d'].price_change_pct * 100).toLocaleString('us-US')}%</span>
            </td>
            <td>
                <span className={styles.marketCap}>$ {Number(crypto.market_cap).toLocaleString('us-US')}</span>
            </td>
            <td>
                <span className={styles.marketCap}>$ {Number(crypto['1d'].volume).toLocaleString('us-US')}</span>
            </td>
        </tr>
    );
};

export default Crypto;