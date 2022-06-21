import React, { Component } from "react";

class Preview extends Component {

    render() {
        return(
            <div>
                <button className="print-hide" onClick={this.props.handleClick}>
                    {
                        this.props.active ?
                        <span>Preview Mode</span>:
                        <span>Exit Preview Mode</span>
                    }
                </button>
            </div>
        )
    }
}

export default Preview