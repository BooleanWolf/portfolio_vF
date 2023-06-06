import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>BRAIN OF ROBOTS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>MD Tamim Sarkar</h1>
            <h6 className={styles.bio}>Robotics and AI Enthusiast</h6>


            <Link href="/about">
              <button className={styles.button}>About</button>
            </Link>

            <Link href="/projects">
              <button className={styles.button}>Projects</button>
            </Link>

            
            <Link href="/research">
              <button className={styles.button2}>Research</button>
            </Link>

            
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>


          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
