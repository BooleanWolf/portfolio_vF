import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nitinranganath.me',
    href: 'https://nitinranganath.me',
  },
  {
    social: 'email',
    link: '2010097@me.buet.ac.bd',
    href: 'mailto:2010097@me.buet.ac.bd',
  },
  {
    social: 'github',
    link: 'BooleanWolf',
    href: 'https://github.com/BooleanWolf',
  },
  {
    social: 'linkdin',
    link: 'MD Tamim Sarkar',
    href: 'https://www.linkedin.com/in/md-tamim-sarkar-7193521aa/',
  },
  {
    social: 'instagram',
    link: '__booleanwolf__',
    href: 'https://www.instagram.com/__booleanwolf__/',
  },
  {
    social: 'facebook',
    link: 'Tamim Holmes',
    href: 'https://www.facebook.com/mdtamim.sarkar.58',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
