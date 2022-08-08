import Image from 'next/image';
import errorImg from '../public/icon-error-404.png';
import styles from '../styles/404.module.scss';

export default function Error() {
  return (
    <div className={styles.error}>
      <p>Something went wrong...</p>
      <Image
        src={errorImg}
        width={360}
        height={360}
        alt="404"
        placeholder="blur"
      />
    </div>
  );
}
