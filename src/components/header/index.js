import React, { Component } from 'react'
import KaiserLogo from '../logo'
import Navbar from '../navbar'
import './styles.scss'

class KaiserHeader extends Component {
    constructor() {
        super()
        this.state = {
            navOpen: false
        }
    }

    render() {
        if(this.state.navOpen) {
            document.getElementsByTagName('body')[0].classList.add('nav-open')
        } else {
            document.getElementsByTagName('body')[0].classList.remove('nav-open')
        }
        return (
            <div className="k-header">
                <div className="top-bar"></div>
                <div className="header-container">
                    <div className="header-content">
                        
                        <div className="header-logo">
                            <KaiserLogo />
                        </div>

                        <button 
                            type="button" 
                            onClick={() => this.setState({navOpen: !this.state.navOpen})} 
                            className={this.state.navOpen ? "navbar-toggler toggled" : "navbar-toggler"}>

                            <span className="navbar-toggler-bar nav-top-bar"></span>
                            <span className="navbar-toggler-bar nav-middle-bar"></span>
                            <span className="navbar-toggler-bar nav-bottom-bar"></span>
                        </button>
                    </div>
                    <Navbar path={this.props.path} onClickNavigationInline={() => this.setState({navOpen: false})}/>
                </div>
            </div>
        )
    }
}

export default KaiserHeader