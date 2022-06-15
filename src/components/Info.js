import React, { Component } from "react";

class Info extends Component {

    render() {
        return (
            <div>
                <label>
                    First Name
                    <input type="text"></input>
                </label>
                <label>
                    Last Name
                    <input type="text"></input>
                </label>
                <label>
                    Email
                    <input type="email"></input>
                </label>
                <label>
                    Phone number
                    <input type="tel" ></input>
                </label>
            </div>
        )
    }
}

export default Info;