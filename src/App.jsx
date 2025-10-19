import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCard from "./sections/FeatureCard"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero />
        <ShowcaseSection />
        {/*<LogoSection />*/}
        <FeatureCard />
        <ExperienceSection />
    </>
  )
}

export default App