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
            education: {
                name: '',
                location: '',
                degree: '',
                major: '',
                startDate: '',
                endDate: '',
                GPA: '',
                id: uniqid(),
            },
            educationArray: [],
            skill: {
                text: '',
                id: uniqid(),
            },
            skills: []
        }
    }

    // Info methods

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

    // Education methods

    handleEducationNameChange = (e) => {
        this.setState({
            education: {
                name: e.target.value,
                location: this.state.education.location,
                degree: this.state.education.degree,
                major: this.state.education.major,
                startDate: this.state.education.startDate,
                endDate: this.state.education.endDate,
                GPA: this.state.education.GPA,
                id: this.state.education.id,
            },
        });
    }

    handleEducationLocationChange = (e) => {
        this.setState({
            education: {
                name: this.state.education.name,
                location: e.target.value,
                degree: this.state.education.degree,
                major: this.state.education.major,
                startDate: this.state.education.startDate,
                endDate: this.state.education.endDate,
                GPA: this.state.education.GPA,
                id: this.state.education.id,
            },
        });
    }

    handleEducationDegreeChange = (e) => {
        this.setState({
            education: {
                name: this.state.education.name,
                location: this.state.education.location,
                degree: e.target.value,
                major: this.state.education.major,
                startDate: this.state.education.startDate,
                endDate: this.state.education.endDate,
                GPA: this.state.education.GPA,
                id: this.state.education.id,
            },
        });
    }

    handleEducationMajorChange = (e) => {
        this.setState({
            education: {
                name: this.state.education.name,
                location: this.state.education.location,
                degree: this.state.education.degree,
                major: e.target.value,
                startDate: this.state.education.startDate,
                endDate: this.state.education.endDate,
                GPA: this.state.education.GPA,
                id: this.state.education.id,
            },
        });
    }

    handleEducationStartChange = (e) => {
        this.setState({
            education: {
                name: this.state.education.name,
                location: this.state.education.location,
                degree: this.state.education.degree,
                major: this.state.education.major,
                startDate: e.target.value,
                endDate: this.state.education.endDate,
                GPA: this.state.education.GPA,
                id: this.state.education.id,
            },
        });
}

    handleEducationEndChange = (e) => {
        this.setState({
            education: {
                name: this.state.education.name,
                location: this.state.education.location,
                degree: this.state.education.degree,
                major: this.state.education.major,
                startDate: this.state.education.startDate,
                endDate: e.target.value,
                GPA: this.state.education.GPA,
                id: this.state.education.id,
            },
        });
    }

    handleEducationGPAChange = (e) => {
        this.setState({
            education: {
                name: this.state.education.name,
                location: this.state.education.location,
                degree: this.state.education.degree,
                major: this.state.education.major,
                startDate: this.state.education.startDate,
                endDate: this.state.education.endDate,
                GPA: e.target.value,
                id: this.state.education.id,
            },
        });
    }

    handleEducationAdd = () => {
        this.setState({
            educationArray: this.state.educationArray.concat(this.state.education),
            education: {
                name: '',
                location: '',
                degree: '',
                major: '',
                startDate: '',
                endDate: '',
                GPA: '',
                id: uniqid(),
            },
        });
    }

    handleEducationDelete = (e) => {
        this.setState({educationArray: this.state.educationArray.filter((_, index) => index !== +e.target.dataset.id)})
    }

    // Skill methods

    handleSkillChange = (e) => {
        this.setState({
            skill: {
                text: e.target.value,
                id: this.state.skill.id,
            },
          });
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

    handleSkillDelete = (e) => {
        this.setState({skills: this.state.skills.filter((_, index) => index !== +e.target.dataset.id)})
    }

    render() {
        return (
            <main>
                <Info {...this.state.info} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} handleEmailChange={this.handleEmailChange} handlePhoneChange={this.handlePhoneChange}/>
                <Education {...this.state.education} educationArray={this.state.educationArray} handleNameChange={this.handleEducationNameChange} handleLocationChange={this.handleEducationLocationChange} handleDegreeChange={this.handleEducationDegreeChange} handleMajorChange={this.handleEducationMajorChange} handleStartChange={this.handleEducationStartChange} handleEndChange={this.handleEducationEndChange} handleGPAChange={this.handleEducationGPAChange} deleteButtonClicked={this.handleEducationDelete} addButtonClicked={this.handleEducationAdd}/>
                <Experience />
                <Skills skills={this.state.skills} text={this.state.skill.text} handleChange={this.handleSkillChange} addButtonClicked={this.handleSkillAdd} deleteButtonClicked={this.handleSkillDelete}/>
            </main>
            
        )
    }
}

export default Main;