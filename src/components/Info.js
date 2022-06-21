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
                <h2>{this.state.info.firstName} {this.state.info.lastName}</h2>
                <h3>Personal Information</h3>
                <div>
                    <h4>Address</h4>
                    <p>{this.state.info.address}</p>
                    <h4>Phone number</h4>
                    <p>{this.state.info.phone}</p>
                    <h4>Email</h4>
                    <p>{this.state.info.email}</p>
                </div>
                <div class={computedClassName}>
                    <label>
                        First Name
                        <input type="text" value={this.state.info.firstName} onChange={this.handleFirstNameChange}></input>
                    </label>
                    <label>
                        Last Name
                        <input type="text" value={this.state.info.lastName} onChange={this.handleLastNameChange}></input>
                    </label>
                    <label>
                        Address
                        <input type="text" value={this.state.info.address} onChange={this.handleAddressChange}></input>
                    </label>
                    <label>
                        Email
                        <input type="email" value={this.state.info.email} onChange={this.handleEmailChange}></input>
                    </label>
                    <label>
                        Phone number
                        <input type="tel" value={this.state.info.phone} onChange={this.handlePhoneChange}></input>
                    </label>
                </div>
            </div>
        )
    }
}

export default Info;