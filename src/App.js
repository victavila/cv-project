import React, { Component } from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Preview from "./components/Preview"
import Print from "./components/Print";
import "./styles/style.css"



class App extends Component {
    constructor() {
      super();

      this.state = {
        active: true,
      };
    }

    handleClick = () => {
      this.setState({active: !this.state.active})
    }
    

    render() {
        return (
            <main>
                <Info active={this.state.active}/>
                <Education active={this.state.active}/>
                <Experience active={this.state.active}/>
                <Skills active={this.state.active}/>
                <Preview active={this.state.active} handleClick={this.handleClick}/>
                <Print active={this.state.active} />
            </main>
        )
    }
}

export default App;
