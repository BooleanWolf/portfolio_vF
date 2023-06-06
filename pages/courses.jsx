import styles from '../styles/AboutPage.module.css'
import { getEducations } from './api/education';

const CoursesPage = ({ educations }) => {
  return (
    <div className={styles.about}>
      <h2>Courses</h2>

      <div className={styles.div_about}>
        <p>I am MD Tamim Sarkar. I am passionate in Robotics and Artificial Intelligence. I try to build</p>
        <p>any kind of AI model, neural network or Reinforcement learning model for land vehicle robot and UAVs.</p>
        <p>From my childhood, I was curious of how machine works. And so I am trying to make machine work my own way.</p>
      </div>
     


      <h2>Research Interest</h2>

      <div className={styles.div_research}>
        <ul className={styles.tags_divide}>
          <div>
              <li className={styles.research_tag_orange}>Artificial Intelligence</li>
              <li className={styles.research_tag_green}>Aerial Robotics</li>
              <li className={styles.research_tag_blue}>Autonomous Navigation</li>
          </div>

          <div>
              <li className={styles.research_tag_green}>Control System</li>
              <li className={styles.research_tag_orange}>Computer Vision</li>
              <li className={styles.research_tag_green}>Aerodynamics</li>
          </div>
        </ul>
      </div>
    

      <h2>Education</h2>

      <div className='edu_main'>
        
        {educations.map((edu)=>(
           <div className={styles.edu_card}>
           <div>
             <h3>{edu.name}</h3>
             <h4>{edu.school}</h4>
           </div>
 
           <div className={styles.edu_year}>
             {edu.year}
           </div>
             
         </div>
        ))}

      </div>


      

    </div>
  );
};

export async function getStaticProps() {

  const educations = getEducations();


  return {
    props: { title: 'About', educations },
  };
}

export default CoursesPage;
