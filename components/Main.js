import Router from 'next/router';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRates, getSelectedRate } from '../store/selectors/rateSelectors';
import { setSelectedRate } from '../store/actions';

import styles from '../styles/Main.module.scss';

export default function Main() {
  const rates = useSelector((state) => getAllRates(state));
  const rate = useSelector((state) => getSelectedRate(state));
  const dispatch = useDispatch();
  const router = useRouter();

  const options = rates?.reduce((arr, rate) => {
    arr.push(rate.code);
    return arr;
  }, []);

  const handleSelectChange = (e) => {
    Router.push(`/rates/${e.target.value}`);
  };

  useEffect(() => {
    dispatch(setSelectedRate(router.query.code));
  }, [router.query.code]);

  return (
    <main className={styles.main}>
      <h1>Exchange Rate</h1>
      <div className={styles.main__exchangeinfo}>
        <span className={styles.main__title}>
          {(!!rate?.rate_float && rate?.rate_float.toFixed(2)) ||
            rates[0]?.rate_float.toFixed(2)}
        </span>

        <select
          className={styles.main__select}
          onChange={handleSelectChange}
          value={router.query.code || options[0]}
        >
          {options.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <span className={styles.main__title}>for 1 BTC</span>
      </div>
    </main>
  );
}
