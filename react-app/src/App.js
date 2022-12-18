import React from "react";
import Header from "./Components/MainPictureSection";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;