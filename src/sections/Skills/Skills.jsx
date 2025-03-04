import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Network Security" />
        <SkillList src={checkMarkIcon} skill="Incident Response" />
        <SkillList src={checkMarkIcon} skill="Threat Analysis" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Security Policy & Compliance" />
        <SkillList src={checkMarkIcon} skill="Linux" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="IAM (Identity & Access Management)" />
        <SkillList src={checkMarkIcon} skill="DLP (Data Loss Prevention)" />
        <SkillList src={checkMarkIcon} skill="SOC Operations" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SIEM (Security Information & Event Management)" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Cloud Security (AWS, Google Cloud)" />
        <SkillList src={checkMarkIcon} skill="Zero Trust Security" />
        <SkillList src={checkMarkIcon} skill="Security Auditing" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Penetration Testing" />
        <SkillList src={checkMarkIcon} skill="Security Automation & Scripting" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Computer Networks" />
        <SkillList src={checkMarkIcon} skill="Operating Systems" />
        <SkillList src={checkMarkIcon} skill="Java" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="Python" />
      </div>
    </section>
  );
}

export default Skills;