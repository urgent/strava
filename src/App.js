import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import PolygonWrapper from "./Components/PolygonWrapper";
import PolygonComp from "./Components/PolygonComp";
import MapWrapper from "./Components/MapWrapper";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <div style={{ width: "100vw", height: "50vh" }}>
        <MapWrapper />
      </div>
      <Section2 />
      <div style={{ width: "100vw", height: "50vh" }}>
        <PolygonWrapper />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
