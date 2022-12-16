import React from "react";
import MainPicture from "./Components/MainPictureSection";
import Welcome from "./Components/Welcome";
import MainSection from "./Components/MainSection";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

import Mirg from "./assets/images/section-image.jpg";

function App() {
  return (
    <div className="App">
      <MainPicture />
      <Welcome />
      <MainSection />
      <Section image={Mirg} title="Maecenas nulla neque" text="Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis." btnText="Read More" />
      <Footer />
    </div>
  );
}

export default App;
