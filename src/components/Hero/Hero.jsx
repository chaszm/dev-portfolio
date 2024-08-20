/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Chase!</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience in several modern
          frameworks and tools!
        </p>
        <a href="mailto:cmo23006@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/comp2Image.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
