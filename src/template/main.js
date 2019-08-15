import React, { Component } from 'react'
import KaiserHeader from '../components/header'
import KaiseerFooter from '../components/footer'

class MainTemplate extends Component {
    render () {
        return (
            <div className="kaiser">
                <KaiserHeader path={this.props.path}/> 
                <div className="kaiser-content">
                    {this.props.children}
                </div>
                <KaiseerFooter />
            </div>
        )
    }
}

export default MainTemplate