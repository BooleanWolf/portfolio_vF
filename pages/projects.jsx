import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Significant Project</h3>
      <div>
        <h4>Sort by Fields:   
            <span> aerial-robotics</span>
            <span> computer-vision</span>
        </h4>
      </div>

      <div>
        <h4>Sort by Category:   
            <span> ml-model</span>
            <span> ros-project</span>
            <span> robot</span>
            <span> software</span>
            <span> website</span>
            <span> scripts</span>
            <span> simulation</span>
            <span> 3d-model</span>
        </h4>
      </div>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>


      <h3>Stuff I've Built So Far</h3>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
