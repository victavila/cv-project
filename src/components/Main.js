import React, { Component } from "react";
import Info from "./Info";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Main extends Component {

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

export default Main;