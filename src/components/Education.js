import React, { Component } from "react";
import uniqid from "uniqid"

class Education  extends Component {
    constructor() {
        super();

        this.state = {
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
            edit: false
        }
    }

    handleNameChange = (e) => {
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

    handleLocationChange = (e) => {
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

    handleDegreeChange = (e) => {
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

    handleMajorChange = (e) => {
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

    handleStartChange = (e) => {
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

    handleEndChange = (e) => {
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

    handleGPAChange = (e) => {
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

    handleAddClicked = () => {
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

    handleDeleteClicked = (e) => {
        this.setState({educationArray: this.state.educationArray.filter((_, index) => index !== +e.target.dataset.id)})
    }

    handleEditClicked = () => {
        this.setState({
            edit: !this.state.edit,
        })
    }

    handleEditChange = (key) => (e) => {
        let newArray = [...this.state.educationArray];
        let newEducation = {...newArray[+e.target.dataset.id]};
        newEducation[key] = e.target.value;
        newArray[+e.target.dataset.id] = newEducation;
        this.setState({educationArray: newArray});
    }

    render() {
        return (
            <div className="education">
                <h3>Education</h3>
                {this.state.educationArray.map((education, index) => (
                    <div key={education.id}>
                        {
                            this.state.edit ?
                            <div>
                                <input type="text" data-id={index} value={this.state.educationArray[index].name} onChange={this.handleEditChange("name")}></input>
                                <input type="text" data-id={index} value={this.state.educationArray[index].location} onChange={this.handleEditChange("location")}></input>
                                <input type="text" data-id={index} value={this.state.educationArray[index].degree} onChange={this.handleEditChange("degree")}></input>
                                <input type="text" data-id={index} value={this.state.educationArray[index].major} onChange={this.handleEditChange("major")}></input>
                                <input type="text" data-id={index} value={this.state.educationArray[index].GPA} onChange={this.handleEditChange("GPA")}></input>
                                <input type="text" data-id={index} value={this.state.educationArray[index].startDate} onChange={this.handleEditChange("startDate")}></input>
                                <input type="text" data-id={index} value={this.state.educationArray[index].endDate} onChange={this.handleEditChange("endDate")}></input>
                            </div>:
                            <div>
                                <p>{education.name}</p>
                                <p>{education.location}</p>
                                <p>{education.degree}</p>
                                <p>{education.major}</p>
                                <p>{education.GPA}</p>
                                <p>{education.startDate}</p>
                                <p>{education.endDate}</p>
                            </div>
                        }
                        <button data-id={index} onClick={this.handleDeleteClicked}>delete</button>
                    </div>
                ))}
                <div>
                    <label>
                        School
                        <input type="text" value={this.state.education.name} onChange={this.handleNameChange}></input>
                    </label>
                    <label>
                        Location
                        <input type="text" value={this.state.education.location} onChange={this.handleLocationChange}></input>
                    </label>
                    <label>
                        Degree
                        <input type="text" value={this.state.education.degree} onChange={this.handleDegreeChange}></input>
                    </label>
                    <label>
                        Major
                        <input type="text" value={this.state.education.major} onChange={this.handleMajorChange}></input>
                    </label>
                    <label>
                        Start Date
                        <input type="text" value={this.state.education.startDate} onChange={this.handleStartChange}></input>
                    </label>
                    <label>
                        End Date
                        <input type="text" value={this.state.education.endDate} onChange={this.handleEndChange}></input>
                    </label>
                    <label>
                        GPA
                        <input type="text" value={this.state.education.GPA} onChange={this.handleGPAChange}></input>
                    </label>
                    <button className="add" onClick={this.handleAddClicked}>add</button>
                    <button onClick={this.handleEditClicked}>{
                        this.state.edit ?
                        <span>submit</span>:
                        <span>edit</span>
                    }</button>
                </div>
            </div>
        )
    }
}

export default Education;