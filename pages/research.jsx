import styles from '../styles/Research.module.css'
import {papers} from './data/papers';

const ResearchPage = ({  }) => {
  return (
    <div className={styles.about}>
      <h1>Research</h1>

      <div className={styles.count_research}>
        <h3> <span className={styles.text_red}>Total Journal:</span> <span>00</span> (Q1: 00, Q3: 00);</h3>
        <h3> <span className={styles.text_red}>Total Conference:</span> <span>00</span> (IEEE: 00);</h3>
      </div>
      

      <div className={styles.tags_research}>
        <h4>Paper Type:</h4>
        <div className={styles.tags}>
          <p className={styles.tag}>Q1</p>
          <p className={styles.tag}>Q2</p>
          <p className={styles.tag}>Conference</p>
          <p className={styles.tag}>IEEE</p>
        </div>
      </div>

      {papers.map((pap)=>(
          <div className={styles.paper}>
          <div>
            <h3 className={styles.paper_title}>{pap.title}</h3>
            <p className={styles.paper_title}>{pap.author}</p>
            <p className={styles.paper_title}>{pap.about}</p>
            
            <p className={styles.paper_title} > <span className={styles.text_red}>Conference:</span> {pap.conference}</p>
            <a href={pap.url} className={styles.paper_title}>View PDF</a>
  
          </div>
        </div>
      ))}
     
    </div>
  );
};

export async function getStaticProps() {



  return {
    props: { title: 'About' },
  };
}

export default ResearchPage;
