import InitialPart from "../components/InitialPart"
import About from "../components/About"
import Services from "../components/Services"
import Education from "../components/Education"
import Project from "../components/Project"

function HomePage() {
  return (
    <>
      <InitialPart />
      <About />
      <Project />
      <Services />
      <Education />
    </>
  )
}

export default HomePage