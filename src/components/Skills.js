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
            skills: []
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

    render() {
        return (
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                {this.state.skills.map((skill, index) => (
                    <div key={skill.id} className="flex-container">
                        <li>{skill.text}</li>
                        <button data-id={index} onClick={this.handleDeleteClicked}>delete</button>
                    </div>
                ))}
                </ul>
                <input type="text" value={this.state.skill.text} onChange={this.handleChange}></input>
                <button className="add" onClick={this.handleAddClicked}>add</button>
            </div>
        )
    }
}

export default Skills