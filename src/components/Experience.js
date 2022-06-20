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
            experienceArray: []
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

    render() {
        return (
            <div className="experience">
                <h3>Experience</h3>
                {this.state.experienceArray.map((experience, index) => (
                    <div key={experience.id}>
                        <p>{experience.company}</p>
                        <p>{experience.position}</p>
                        <p>{experience.location}</p>
                        <p>{experience.startDate}</p>
                        <p>{experience.endDate}</p>
                        <p>{experience.description}</p>
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
                </div>
            </div>
        )
    }
}

export default Experience

