import React, { Component } from "react";
import Info from "./Info";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import uniqid from "uniqid"

class Main extends Component {
    constructor() {
        super();

        this.state = {
            skill: {
                text: '',
                id: uniqid(),
            },
            skills: []
        }
    }

    handleSkillAdd = () => {
        this.setState({
            skills: this.state.skills.concat(this.state.skill),
            skill: {
              text: '',
              id: uniqid(),
            },
          });
    }

    handleSkillChange = (e) => {
        this.setState({
            skill: {
              text: e.target.value,
              id: this.state.skill.id,
            },
          });
    }

    handleSkillDelete = (e) => {
        this.setState({skills: this.state.skills.filter((_, index) => index !== +e.target.dataset.id)})
    }

    render() {
        return (
            <main>
                <Info />
                <Education />
                <Experience />
                <Skills skills={this.state.skills} text={this.state.skill.text} handleChange={this.handleSkillChange} addButtonClicked={this.handleSkillAdd} deleteButtonClicked={this.handleSkillDelete}/>
            </main>
            
        )
    }
}

export default Main;