import Main from './Main';
import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
