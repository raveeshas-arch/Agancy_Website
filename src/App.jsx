import "./App.css";

import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Magazine from "./components/Magazine";
import Mobile1 from "./components/Mobile1";
import Man from "./components/Man";
import { Company } from "./components/Company";
import Card from "./components/Card";
import Newslettr from "./components/Newslettr";
import Footer from "./components/Footer";
import Contact1 from "./components/Contact1";
import Hero3 from "./components/Hero3";
import Navbar from "./components/Navbar";
import Dot from "./components/Dot";

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar/>
      <Hero1 /> 
      <Hero2 />
      <Hero3/>
      <Mobile1 />
      <Magazine />
      <Man />
      <Card />
      <Company />
      <Newslettr />
     <Contact1 />
      <Footer />
    </div>
  );
};

export default App;
