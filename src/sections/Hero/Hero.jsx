import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Rudra Kadel"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>Rudra Kadel</h1>
        <h2 className={styles.title}>Cybersecurity Enthusiast & Digital Defender</h2>
        <div className={styles.socials}>
          <a href="https://x.com/RudraKadel" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/rudrakadel" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/rudra-kadel-1084b6249/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </div>
        <p className={`${styles.description} ${styles.centerText}`}>
        Cybersecurity strategist with expertise in governance, risk management, and compliance. I specialize in designing and implementing security frameworks that align with business objectives, ensuring resilience against evolving cyber threats. With a strong foundation in ethical hacking, threat intelligence, and security automation, I focus on proactive risk mitigation and regulatory compliance. Passionate about continuous learning and staying ahead of emerging cybersecurity trends, I actively explore new technologies, threat landscapes, and security methodologies to enhance enterprise security. Committed to strengthening cybersecurity strategies through policy development, incident response, and threat analysis.  
        </p>
        <a href={CV} download>
          <button className={styles.resumeButton}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
