import React, { Component } from "react";

class Education  extends Component {

    render() {
        return (
            <div>
                <label>
                    School
                    <input type="text"></input>
                </label>
                <label>
                    Location
                    <input type="text"></input>
                </label>
                <label>
                    Degree
                    <input type="text"></input>
                </label>
                <label>
                    Major
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
                    GPA
                    <input type="text"></input>
                </label>
            </div>
        )
    }
}

export default Education;