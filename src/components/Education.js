import React, { Component } from "react";

class Education  extends Component {

    render() {
        return (
            <div className="education">
                <h3>Education</h3>
                {this.props.educationArray.map((education, index) => (
                    <div key={education.id}>
                        <p>{education.name}</p>
                        <p>{education.location}</p>
                        <p>{education.degree}</p>
                        <p>{education.major}</p>
                        <p>{education.GPA}</p>
                        <p>{education.startDate}</p>
                        <p>{education.endDate}</p>
                        <button data-id={index} onClick={this.props.deleteButtonClicked}>delete</button>
                    </div>
                ))}
                <div>
                    <label>
                        School
                        <input type="text" value={this.props.name} onChange={this.props.handleNameChange}></input>
                    </label>
                    <label>
                        Location
                        <input type="text" value={this.props.location} onChange={this.props.handleLocationChange}></input>
                    </label>
                    <label>
                        Degree
                        <input type="text" value={this.props.degree} onChange={this.props.handleDegreeChange}></input>
                    </label>
                    <label>
                        Major
                        <input type="text" value={this.props.major} onChange={this.props.handleMajorChange}></input>
                    </label>
                    <label>
                        Start Date
                        <input type="text" value={this.props.startDate} onChange={this.props.handleStartChange}></input>
                    </label>
                    <label>
                        End Date
                        <input type="text" value={this.props.endDate} onChange={this.props.handleEndChange}></input>
                    </label>
                    <label>
                        GPA
                        <input type="text" value={this.props.GPA} onChange={this.props.handleGPAChange}></input>
                    </label>
                    <button className="add" onClick={this.props.addButtonClicked}>add</button>
                </div>
            </div>
        )
    }
}

export default Education;