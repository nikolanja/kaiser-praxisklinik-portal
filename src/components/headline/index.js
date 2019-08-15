import React, { Component } from 'react';
import './styles.scss'

class Headline extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render () {
        return (
            <div className="headline">
                <span className={this.props.white ? "white-color" : "gray-color"}>{this.props.title}</span>
            </div>
        )
    }
}

export default Headline