// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/molecules/Navbar";
import FindWork from "./component/molecules/FindWork";
import FindTalent from "./component/molecules/FindTalent";
import HowITWork from "./component/molecules/HowITWork";
import Footer from "./component/molecules/Footer";
import Assurance from "./component/molecules/Assurance";
import StartJourney from "./component/molecules/StartJourney";
import CarouselSlide from "./component/molecules/CarouselSlide";
import Faq from "./component/molecules/Faq";
import ContactUs from "./component/molecules/ContactUs";

function App() {
  return (
    <div className="App font-ABeeZee">
      <Navbar /> 
      <FindWork />
      <FindTalent />
      <HowITWork />
      <Assurance/>
      <StartJourney/>
      <CarouselSlide/>
      <Faq/>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
