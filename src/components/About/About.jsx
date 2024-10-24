import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/asd.PNG")}
          alt="aboutme"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Background</h3>
              <p>
                Recent graduate with a B.S. in Computer Science. I took my first
                programming course at 16 years old and have always had an
                interest in software development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Development</h3>
              <p>
                I work with both front-end and back-end software and have a
                focus on full-stack development. I enjoy having control of the
                user experience and being familiar with the back-end
                architecture during the development of projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion for Technology</h3>
              <p>
                Enthusiastic about attending computing events such as hackathons
                and have been part of several coding/tech clubs. I am constantly
                exploring the latest frameworks and tools used in software
                development, with a desire to apply my skills to impactful,
                real-world projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
