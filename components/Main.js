import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRates, getSelectedRate } from '../store/selectors/rateSelectors';
import { setSelectedRate } from '../store/actions';

import styles from '../styles/Main.module.scss';

export default function Main() {
  const rates = useSelector((state) => getAllRates(state));
  const rate = useSelector((state) => getSelectedRate(state));
  const dispatch = useDispatch();

  const options = rates?.reduce((arr, rate) => {
    arr.push(rate.code);
    return arr;
  }, []);

  const handleSelectChange = (e) => {
    dispatch(setSelectedRate(e.target.value));
    Router.push(`/rates/${e.target.value}`);
  };

  return (
    <main className={styles.main}>
      <span className={styles.main__title}>
        {(!!rate?.rate_float && rate?.rate_float.toFixed(2)) ||
          rates[0]?.rate_float.toFixed(2)}
      </span>

      <select
        className={styles.main__select}
        onChange={handleSelectChange}
        defaultValue={rate.code || options[0]}
      >
        {options.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <span className={styles.main__title}>for 1 BTC</span>
    </main>
  );
}
