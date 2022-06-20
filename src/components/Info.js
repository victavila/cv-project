import React, { Component } from "react";

class Info extends Component {

    render() {
        return (
            <div className="info">
                <h3>Info</h3>
                <label>
                    First Name
                    <input type="text" value={this.props.firstName} onChange={this.props.handleFirstNameChange}></input>
                </label>
                <label>
                    Last Name
                    <input type="text" value={this.props.lastName} onChange={this.props.handleLastNameChange}></input>
                </label>
                <label>
                    Email
                    <input type="email" value={this.props.email} onChange={this.props.handleEmailChange}></input>
                </label>
                <label>
                    Phone number
                    <input type="tel" value={this.props.phone} onChange={this.props.handlePhoneChange}></input>
                </label>
            </div>
        )
    }
}

export default Info;