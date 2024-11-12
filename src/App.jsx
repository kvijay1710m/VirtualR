import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
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
        <Footer/>
      </div>
    </>
  )
}

export default App
