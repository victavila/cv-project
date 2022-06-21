import React, { Component } from "react";

class Print extends Component {

    handleClick = () => {
        window.print();
    }


    render() {
        return(
            <div>
                {
                    this.props.active ?
                    <></>:
                    <button className="print-hide" onClick={this.handleClick}>Print</button>
                }
            </div>
        )
    }
}

export default Print