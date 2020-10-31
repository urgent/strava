import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import PolygonWrapper from "./Components/PolygonWrapper";
import PolygonComp from "./Components/PolygonComp";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ width: "100vw", height: "50vh" }}>
        <PolygonWrapper />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
