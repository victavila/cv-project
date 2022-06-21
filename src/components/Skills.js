import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import uniqid from "uniqid"

class Skills extends Component {
    constructor() {
        super();

        this.state = {
            skill: {
                text: '',
                id: uniqid(),
            },
            skills: [],
            edit: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            skill: {
                text: e.target.value,
                id: this.state.skill.id,
            },
          });
    }

    handleAddClicked = () => {
        this.setState({
            skills: this.state.skills.concat(this.state.skill),
            skill: {
                text: '',
                id: uniqid(),
            },
          });
    }

    handleDeleteClicked = (e) => {
        this.setState({skills: this.state.skills.filter((_, index) => index !== +e.target.dataset.id)})
    }

    handleEditClicked = () => {
        this.setState({
            edit: !this.state.edit,
        })
    }
    
    handleEditChange = (e) => {
        let newSkills = [...this.state.skills];
        let newSkill = {...newSkills[+e.target.dataset.id]};
        newSkill.text = e.target.value;
        newSkills[+e.target.dataset.id] = newSkill;
        this.setState({skills: newSkills});
    }

    render() {
        
        return (
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                {this.state.skills.map((skill, index) => (
                    <div key={skill.id} className="flex-container">
                        {
                            this.state.edit ?
                            <div>
                                <input type="text" data-id={index} value={this.state.skills[index].text} onChange={this.handleEditChange}></input>
                            </div>:
                            <li>{skill.text}</li>
                        }
                        <button data-id={index} onClick={this.handleDeleteClicked}>delete</button>
                    </div>
                ))}
                </ul>
                <input type="text" value={this.state.skill.text} onChange={this.handleChange}></input>
                <button className="add" onClick={this.handleAddClicked}>add</button>
                <button onClick={this.handleEditClicked}>{
                    this.state.edit ?
                    <span>submit</span>:
                    <span>edit</span>
                }</button>
            </div>
        )
    }
}

export default Skills