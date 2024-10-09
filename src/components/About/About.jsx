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
              <p>Recent Computer Science graduate that loves working with </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Development</h3>
              <p>I am an experei</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion for Technology</h3>
              <p>
                Always eager about and up-to-date on the newest frameworks and
                tools and I am eager to apply my skills and knowledge to make a
                meaningful impact
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
