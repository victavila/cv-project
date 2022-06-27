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
        const computedClassName = this.props.active ? 'visible' : 'hidden';
        
        return (
            <div className="education">
                <h3>Education</h3>
                {this.state.educationArray.map((education, index) => (
                    <div key={education.id}>
                        {
                            this.state.edit ?
                            <div className="center">
                                <div className="flex-column">
                                    <input type="text" data-id={index} value={this.state.educationArray[index].name} onChange={this.handleEditChange("name")}></input>
                                    <input type="text" data-id={index} value={this.state.educationArray[index].location} onChange={this.handleEditChange("location")}></input>
                                    <input type="text" data-id={index} value={this.state.educationArray[index].degree} onChange={this.handleEditChange("degree")}></input>
                                    <input type="text" data-id={index} value={this.state.educationArray[index].major} onChange={this.handleEditChange("major")}></input>
                                    <input type="text" data-id={index} value={this.state.educationArray[index].GPA} onChange={this.handleEditChange("GPA")}></input>
                                    <input type="text" data-id={index} value={this.state.educationArray[index].startDate} onChange={this.handleEditChange("startDate")}></input>
                                    <input type="text" data-id={index} value={this.state.educationArray[index].endDate} onChange={this.handleEditChange("endDate")}></input>
                                </div>
                            </div>:
                            <div className="education-grid">
                                <p className="school-info"><span className="school-name">{education.name}, </span> {education.location}</p>
                                <p className="education-time">{education.startDate} - {education.endDate}</p>
                                <p className="degree">{education.degree}</p>
                                <p className="gpa"> GPA: {education.GPA}</p>
                                <p className="major">{education.major}</p>
                            </div>
                        }
                        <div className="center">
                            <button className={`delete ${computedClassName}`} data-id={index} onClick={this.handleDeleteClicked}>delete</button>
                        </div>
                    </div>
                ))}
                <div className={`center ${computedClassName}`}>
                    <div className="flex-column">
                        <label>School:</label>
                        <input type="text" value={this.state.education.name} onChange={this.handleNameChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Location:</label>
                        <input type="text" value={this.state.education.location} onChange={this.handleLocationChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Degree:</label>
                        <input type="text" value={this.state.education.degree} onChange={this.handleDegreeChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Major:</label>
                        <input type="text" value={this.state.education.major} onChange={this.handleMajorChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Start Date:</label>
                        <input type="text" value={this.state.education.startDate} onChange={this.handleStartChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>End Date</label>
                        <input type="text" value={this.state.education.endDate} onChange={this.handleEndChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>GPA:</label>
                        <input type="text" value={this.state.education.GPA} onChange={this.handleGPAChange}></input>
                    </div>
                    <div className="button-container">
                        <button className="add" onClick={this.handleAddClicked}>add</button>
                        <button className="edit" onClick={this.handleEditClicked}>
                            {
                            this.state.edit ?
                            <span>submit</span>:
                            <span>edit</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;