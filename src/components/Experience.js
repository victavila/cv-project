import React, { Component } from "react";
import uniqid from "uniqid"

class Experience extends Component {
    constructor() {
        super();
        
        this.state = {
            experience: {
                company: '',
                position: '',
                location: '',
                startDate: '',
                endDate: '',
                description: '',
                id: uniqid(),
            },
            experienceArray: [],
            edit: false
        }
    }

    handleCompanyChange = (e) => {
        this.setState({
            experience: {
                company: e.target.value,
                position: this.state.experience.position,
                location: this.state.experience.location,
                startDate: this.state.experience.startDate,
                endDate: this.state.experience.endDate,
                description: this.state.experience.description,
                id: this.state.experience.id,
            }
        })
    }

    handlePositionChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: e.target.value,
                location: this.state.experience.location,
                startDate: this.state.experience.startDate,
                endDate: this.state.experience.endDate,
                description: this.state.experience.description,
                id: this.state.experience.id,
            }
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: this.state.experience.position,
                location: e.target.value,
                startDate: this.state.experience.startDate,
                endDate: this.state.experience.endDate,
                description: this.state.experience.description,
                id: this.state.experience.id,
            }
        })
    }

    handleStartChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: this.state.experience.position,
                location: this.state.experience.location,
                startDate: e.target.value,
                endDate: this.state.experience.endDate,
                description: this.state.experience.description,
                id: this.state.experience.id,
            }
        })
    }

    handleEndChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: this.state.experience.position,
                location: this.state.experience.location,
                startDate: this.state.experience.startDate,
                endDate: e.target.value,
                description: this.state.experience.description,
                id: this.state.experience.id,
            }
        })
    }

    handleDescriptionChange = (e) => {
        this.setState({
            experience: {
                company: this.state.experience.company,
                position: this.state.experience.position,
                location: this.state.experience.location,
                startDate: this.state.experience.startDate,
                endDate: this.state.experience.endDate,
                description: e.target.value,
                id: this.state.experience.id,
            }
        })
    }

    handleAddClicked = () => {
        this.setState({
            experienceArray: this.state.experienceArray.concat(this.state.experience),
            experience: {
                company: '',
                position: '',
                location: '',
                startDate: '',
                endDate: '',
                description: '',
                id: uniqid(),
            }
        })
    }

    handleDeleteClicked = (e) => {
        this.setState({experienceArray: this.state.experienceArray.filter((_, index) => index !== +e.target.dataset.id)})
    }

    handleEditClicked = () => {
        this.setState({
            edit: !this.state.edit,
        })
    }

    handleEditChange = (key) => (e) => {
        let newArray = [...this.state.experienceArray];
        let newExperience = {...newArray[+e.target.dataset.id]};
        newExperience[key] = e.target.value;
        newArray[+e.target.dataset.id] = newExperience;
        this.setState({experienceArray: newArray});
    }

    handleEditPositionChange = (e) => {
        let newArray = [...this.state.experienceArray];
        let newExperience = {...newArray[+e.target.dataset.id]};
        newExperience.position = e.target.value;
        newArray[+e.target.dataset.id] = newExperience;
        this.setState({experienceArray: newArray});
    }

    render() {
        return (
            <div className="experience">
                <h3>Experience</h3>
                {this.state.experienceArray.map((experience, index) => (
                    <div key={experience.id}>
                        {
                            this.state.edit ?
                            <div>
                                <input type="text" data-id={index} value={this.state.experienceArray[index].company} onChange={this.handleEditChange("company")}></input>
                                <input type="text" data-id={index} value={this.state.experienceArray[index].position} onChange={this.handleEditChange("position")}></input>
                                <input type="text" data-id={index} value={this.state.experienceArray[index].location} onChange={this.handleEditChange("location")}></input>
                                <input type="text" data-id={index} value={this.state.experienceArray[index].startDate} onChange={this.handleEditChange("startDate")}></input>
                                <input type="text" data-id={index} value={this.state.experienceArray[index].endDate} onChange={this.handleEditChange("endDate")}></input>
                                <textarea data-id={index} value={this.state.experienceArray[index].description} onChange={this.handleEditChange("description")}></textarea>
                            </div>:
                            <div>
                                <p>{experience.company}</p>
                                <p>{experience.position}</p>
                                <p>{experience.location}</p>
                                <p>{experience.startDate}</p>
                                <p>{experience.endDate}</p>
                                <p>{experience.description}</p>
                            </div>
                        }
                        <button data-id={index} onClick={this.handleDeleteClicked}>delete</button>
                    </div>
                ))}
                <div>
                    <label>
                        Company
                        <input type="text" value={this.state.experience.company} onChange={this.handleCompanyChange}></input>
                    </label>
                    <label>
                        Position
                        <input type="text" value={this.state.experience.position} onChange={this.handlePositionChange}></input>
                    </label>
                    <label>
                        Location
                        <input type="text" value={this.state.experience.location} onChange={this.handleLocationChange}></input>
                    </label>
                    <label>
                        Start Date
                        <input type="text" value={this.state.experience.startDate} onChange={this.handleStartChange}></input>
                    </label>
                    <label>
                        End Date
                        <input type="text" value={this.state.experience.endDate} onChange={this.handleEndChange}></input>
                    </label>
                    <label>
                        Description
                        <textarea value={this.state.experience.description} onChange={this.handleDescriptionChange}></textarea>
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

export default Experience

