import React, { Component } from "react";

class Info extends Component {
    constructor() {
        super();

        this.state = {
            info: {
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                phone: '',
            }
        }
    }

    handleFirstNameChange = (e) => {
        this.setState({
            info: {
                firstName: e.target.value,
                lastName: this.state.info.lastName,
                address: this.state.info.address,
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
                address: this.state.info.address,
                email: this.state.info.email,
                phone: this.state.info.phone,
            }
        })
    }

    handleAddressChange = (e) => {
        this.setState({
            info: {
                firstName: this.state.info.firstName,
                lastName: this.state.info.lastName,
                address: e.target.value,
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
                address: this.state.info.address,
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
                address: this.state.info.address,
                email: this.state.info.email,
                phone: e.target.value,
            }
        })
    }

    render() {
        const computedClassName = this.props.active ? 'visible' : 'hidden';

        return (
            <div className="info">
                <h2 className="name">{this.state.info.firstName} {this.state.info.lastName}</h2>
                <div className="personal-info">
                    <div>
                        <h4>Address</h4>
                        <p>{this.state.info.address}</p>
                    </div>
                    <div>
                        <h4>Phone number</h4>
                        <p>{this.state.info.phone}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{this.state.info.email}</p>
                    </div>
                </div>
                <h3 className="info-header">Personal Information</h3>
                <div className={`center ${computedClassName}`}>
                    <div className="flex-column">
                        <label>First Name:</label>
                        <input type="text" value={this.state.info.firstName} onChange={this.handleFirstNameChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Last Name:</label>
                        <input type="text" value={this.state.info.lastName} onChange={this.handleLastNameChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Address:</label>
                        <input type="text" value={this.state.info.address} onChange={this.handleAddressChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Email:</label>
                        <input type="email" value={this.state.info.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div className="flex-column">
                        <label>Phone number:</label>
                        <input type="tel" value={this.state.info.phone} onChange={this.handlePhoneChange}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;