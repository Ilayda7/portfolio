import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCard from "./sections/FeatureCard"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero />
        <ShowcaseSection />
        {/*<LogoSection />*/}
        <FeatureCard />
    </>
  )
}

export default App