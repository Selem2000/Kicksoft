import "./App.css";
import Bio from "./Components/Bio/Bio";
import Chars from "./Components/Chars/Chars";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Goal } from "./Components/Goal/Goal";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Bio />
      <Services />
      <Goal />
      <Product />
      <Chars />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
