import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero />
        <ShowcaseSection />
        <LogoSection />
    </>
  )
}

export default App