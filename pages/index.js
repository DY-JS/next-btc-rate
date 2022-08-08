import { useDispatch } from 'react-redux';
import { setAllRates } from '../store/actions';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json'
    );
    const data = await res.json();

    return {
      props: {
        rates: Object.values(data.bpi),
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function Home({ rates }) {
  const dispatch = useDispatch();
  dispatch(setAllRates(rates));

  return (
    <div className={styles.container}>
      <Layout />
    </div>
  );
}
