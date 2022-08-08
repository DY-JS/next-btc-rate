import Image from 'next/image';
import styles from '../styles/404.module.scss';

export default function Error() {
  return (
    <div className={styles.error}>
      <p>Something went wrong...</p>
      <Image src="/icon-error-404.png" width={360} height={360} alt="Logo" />
    </div>
  );
}
