import Head from 'next/head';
import styles from '../styles/Footer.module.scss';

const socials = [
  {
    id: 1,
    icon: 'facebook',
    path: 'https://facebook.com/dmitriy.yelovec',
  },
  {
    id: 2,
    icon: 'telegram',
    path: 'https://t.me/dmitryielovets',
  },
  {
    id: 3,
    icon: 'linkedin',
    path: 'https://www.linkedin.com/in/dmitry-yelovets-7909a6215/',
  },
  {
    id: 4,
    icon: 'google',
    path: 'https://www.google.com',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        {socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <h3>© {new Date().getFullYear()} DY</h3>
    </footer>
  );
};

export default Footer;
