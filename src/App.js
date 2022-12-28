import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyList from "./components/CompanyList";
import HeroFooter from "./components/HeroFooter";
import SiteInfo from "./components/SiteInfo";
import LetsRegister from "./components/LetsRegister";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeroFooter />
      <CompanyList />
      <LetsRegister />
      <SiteInfo />
      <Footer />
    </div>
  );
}

export default App;


