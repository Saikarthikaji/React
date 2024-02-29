import React, {Component, PureComponent} from "react";

class PureComponent1 extends PureComponent {
    render() {
        console.log("Component re-rendering...")
        return <h1>{this.props.message}</h1>
    }
}

// New update
export default PureComponent1