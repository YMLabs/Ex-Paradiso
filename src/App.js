import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Intro from "./Components/Intro/Intro";
import Team from "./Components/Team/Team";
import Collection from "./Components/Collection/Collection";
import Story from "./Components/Story/Story";
import Roadmap from "./Components/Roadmap/Roadmap";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <div className="App">
        <Navbar/>
        <div style={{paddingTop: "4rem"}}>
          <Home/>
          <Intro/>
          <Team/>
          <Collection/>
          <Roadmap/>
          <Story/>
        </div>
        {/* <Footer/> */}
      </div>
    )
  );
}

export default App;
