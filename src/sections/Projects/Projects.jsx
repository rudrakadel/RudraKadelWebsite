import styles from './ProjectsStyles.module.css';
import healthai
 from '../../assets/healthai.png';
import snort from '../../assets/snort.jpg';
import honeypot from '../../assets/honeypot.png';
import GuardianML from '../../assets/GuardianML.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={healthai}
          link="https://github.com/rudrakadel/AI-Powered_Health_Assistant_TECHSAKSHAM.git"
          h3="Healix"
          p="AI Health Assistant Chatbot"
        />
        <ProjectCard
          src={snort}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Intrusion Detection System"
          p="Set Up an IDS"
        />
        <ProjectCard
          src={honeypot}
          link="https://github.com/rudrakadel/HoneyPie.git"
          h3="HoneyPie"
          p="Building a Honeypot"
        />
        <ProjectCard
          src={GuardianML}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="GuardianML"
          p="Network Intrusion ML predictor"
        />
      </div>
    </section>
  );
}

export default Projects;
