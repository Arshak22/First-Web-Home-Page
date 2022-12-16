import React from "react";
import MainPicture from "./Components/MainPictureSection";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <MainPicture />,
      <Welcome />,
      <Footer />
    </div>
  );
}

export default App;
