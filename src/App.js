import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Menu from "./components/common/Menu";
import Gallery from "./components/pages/Gallery";
import "./scss/main.scss";
import Footer from "./components/common/Footer";
import PriceList from "./components/pages/Price-List";

function App() {
  return (
      <BrowserRouter>
          <div className="next_to_container">
              <Menu />
              <Routes>
                  <Route exact path="/" element={<Home />}/>
                  <Route exact path="/cennik" element={<PriceList />}/>
                  <Route exact path="/kontakt" element={<Contact />}/>
                  <Route exact path="/omnie" element={<About />}/>
                  <Route exact path="/galeria" element={<Gallery />}/>
              </Routes>
              <Footer />
          </div>
      </BrowserRouter>

  );
}

export default App;
