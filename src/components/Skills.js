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
        const computedClassName = this.props.active ? 'visible' : 'hidden';
        
        return (
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                {this.state.skills.map((skill, index) => (
                    <div key={skill.id}>
                        {
                            this.state.edit ?
                            <div className="center">
                                <div className="flex-column">
                                    <input type="text" data-id={index} value={this.state.skills[index].text} onChange={this.handleEditChange}></input>
                                    <div className="center">
                                        <button data-id={index} onClick={this.handleDeleteClicked} className={`delete ${computedClassName}`}>delete</button>
                                    </div>
                                </div>
                            </div>:
                            <div className="skills-align">
                                <li>{skill.text}</li>
                                <button data-id={index} onClick={this.handleDeleteClicked} className={`skill-delete ${computedClassName}`}>delete</button>
                            </div>
                        }
                    </div>
                ))}
                </ul>
                <div className={`center ${computedClassName}`}>
                    <div className="flex-column">
                        <input type="text" value={this.state.skill.text} onChange={this.handleChange}></input>
                    </div>
                    <div className="button-container">
                        <button className="add" onClick={this.handleAddClicked}>add</button>
                        <button className="edit" onClick={this.handleEditClicked}>{
                            this.state.edit ?
                            <span>submit</span>:
                            <span>edit</span>
                        }</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills