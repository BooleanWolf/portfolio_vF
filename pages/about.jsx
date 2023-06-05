import styles from '../styles/AboutPage.module.css'
import { getEducations } from './api/education';

const AboutPage = ({ educations }) => {
  return (
    <>
      <h2>A Little Bit About Me</h2>

      <div className={styles.div_about}>
        <h4>I am MD Tamim Sarkar. I am passionate in Robotics and Artificial Intelligence. I try to build</h4>
        <h4>any kind of AI model, neural network or Reinforcement learning model for land vehicle robot and UAVs.</h4>
        <h4>From my childhood, I was curious of how machine works. And so I am trying to make machine work my own way.</h4>
      </div>
     


      <h2>Research Interest</h2>

      <div className={styles.div_research}>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Aerial Robotics</li>
          <li>Autonomous Navigation</li>
          <li>Control System</li>
          <li>Computer Vision</li>
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


      

    </>
  );
};

export async function getStaticProps() {

  const educations = getEducations();


  return {
    props: { title: 'About', educations },
  };
}

export default AboutPage;
