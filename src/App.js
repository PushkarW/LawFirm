// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Content from "./Component/Content/Content";
import Footer from "./Component/Footer/Footer";
import Subscribe from "./Component/Subscribe/Subscribe";
import Success from "./Component/Success/Success";
import AreaPhotos from "./Component/AreaPhotos/AreaPhotos";
import Clients from "./Component/Clients/Clients";
import Team from "./Component/Team/Team";
import Faq from "./Component/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="content">
        <Content />
        <Success />
        <AreaPhotos />
        <Clients />
        <Team />
        <Faq />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
