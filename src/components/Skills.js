import React, { Component } from "react";

class Skills extends Component {

    render() {
        return (
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                {this.props.skills.map((skill, index) => (
                    <div key={skill.id} className="flex-container">
                        <li>{skill.text}</li>
                        <button data-id={index} onClick={this.props.deleteButtonClicked}>delete</button>
                    </div>
                ))}
                </ul>
                <input type="text" value={this.props.text} onChange={this.props.handleChange}></input>
                <button className="add" onClick={this.props.addButtonClicked}>add</button>
            </div>
        )
    }
}

export default Skills