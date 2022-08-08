import { getAllRates } from '../store/selectors/rateSelectors';
import { useSelector } from 'react-redux';

import styles from '../styles/Header.module.scss';

export default function Header() {
  const rates = useSelector((state) => getAllRates(state));

  const ratesInfo =
    rates.length &&
    rates.reduce((arr, rate) => {
      arr.push(`${rate.code}/BTC  ${rate.rate_float.toFixed(2)}`);
      return arr;
    }, []);

  return (
    <header className={styles.header}>
      {rates.length && ratesInfo?.map((item) => <span key={item}>{item}</span>)}
    </header>
  );
}
