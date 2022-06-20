import React, { Component } from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

class App extends Component {

  render() {
    return (
      <main>
          <Info />
          <Education />
          <Experience />
          <Skills />
      </main>
    )
  }
}

export default App;
