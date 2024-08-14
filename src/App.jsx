import styles from "./App.module.css"
import { NavBar } from "./components/NavBar/NavBar"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
