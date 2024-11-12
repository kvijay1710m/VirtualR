import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"


function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-5 px-6">
        <HeroSection />
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonials/>
      </div>
    </>
  )
}

export default App
