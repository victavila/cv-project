import React, { Component } from "react";

class Experience extends Component {

    render() {
        return (
            <div>
                <label>
                    Company
                    <input type="text"></input>
                </label>
                <label>
                    Position
                    <input type="text"></input>
                </label>
                <label>
                    Location
                    <input type="text"></input>
                </label>
                <label>
                    Start Date
                    <input type="text"></input>
                </label>
                <label>
                    End Date
                    <input type="text"></input>
                </label>
                <label>
                    Description
                    <textarea></textarea>
                </label>
            </div>
        )
    }
}

export default Experience

