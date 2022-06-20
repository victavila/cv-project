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
            info: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            },
            skill: {
                text: '',
                id: uniqid(),
            },
            skills: []
        }
    }

    //Info methods

    handleFirstNameChange = (e) => {
        this.setState({
            info: {
                firstName: e.target.value,
                lastName: this.state.info.lastName,
                email: this.state.info.email,
                phone: this.state.info.phone,
            }
        })
    }

    handleLastNameChange = (e) => {
        this.setState({
            info: {
                firstName: this.state.info.firstName,
                lastName: e.target.value,
                email: this.state.info.email,
                phone: this.state.info.phone,
            }
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            info: {
                firstName: this.state.info.firstName,
                lastName: this.state.info.lastName,
                email: e.target.value,
                phone: this.state.info.phone,
            }
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            info: {
                firstName: this.state.info.firstName,
                lastName: this.state.info.lastName,
                email: this.state.info.email,
                phone: e.target.value,
            }
        })
    }

    // Skill methods

    handleSkillAdd = () => {
        console.table(this.state.info)
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
                <Info {...this.state.info} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} handleEmailChange={this.handleEmailChange} handlePhoneChange={this.handlePhoneChange}/>
                <Education />
                <Experience />
                <Skills skills={this.state.skills} text={this.state.skill.text} handleChange={this.handleSkillChange} addButtonClicked={this.handleSkillAdd} deleteButtonClicked={this.handleSkillDelete}/>
            </main>
            
        )
    }
}

export default Main;