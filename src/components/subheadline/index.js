import React, { Component } from 'react';
import './styles.scss'

class Subheadline extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render () {
        return (
            <div className="subheadline">
                <span>{this.props.content}</span>
            </div>
        )
    }
}

export default Subheadline