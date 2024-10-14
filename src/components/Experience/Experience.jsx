import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import languages from "../../data/languages.json"
import { getImageUrl } from "../../utils"

// divide skills into 2 categories, languages and tools

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.sub}>
        <h3>Languages</h3>
        <h3>Frameworks/Tools</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.skills}>
          {languages.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>

        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
