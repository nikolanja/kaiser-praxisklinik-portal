import React, { Component } from 'react'
import './styles.scss'
import locationImg from '../../assets/images/ic_location.png'
import timeImg from '../../assets/images/ic_time.png'
import callImg from '../../assets/images/ic_call.png'
import printImg from '../../assets/images/ic_print.png'
import symbol1Img from '../../assets/images/ic_symbol1.png'
import { Link } from "react-router-dom";

class NavItem extends Component {
    render () {
        const { path, name } = this.props
        if(name === path)
            return <div className="active-item">{name}</div>

        return (
            <Link to={"/" + name}>
                <div className="general-item">
                    {name}
                </div>
            </Link>
        )
    }
}

class Navbar extends Component {
    
    render () {
        return (
            
            <div className="navigation" onClick={() => this.props.onClickNavigationInline()}>
                <ul className="navbar-nav">
                    <li className={this.props.path === 'start' ? "nav-item active" : "nav-item"}>
                        <NavItem path={this.props.path} name="start" />
                    </li>
                    <li className="nav-item">
                        <NavItem path={this.props.path} name="praxis" />
                    </li>
                    <li className="nav-item">
                        <NavItem path={this.props.path} name="team" />
                    </li>
                    <li className="nav-item">
                        <NavItem path={this.props.path} name="leistungen" />
                    </li>
                    <li className="nav-item">
                        <NavItem path={this.props.path} name="service" />
                    </li>
                    <li className="nav-item">
                        <NavItem path={this.props.path} name="kontakt" />
                    </li>
                </ul>
                <div className="kaiser-noty">
                    <div className="noty-item">
                        <div className="item-content">
                            <div className="noty-icon">
                                <img src={locationImg} alt="kaiser location" />
                            </div>
                            <span>Römerstraße 51, 3. OG67547 Worms</span>
                        </div>
                    </div>
            
                    <div className="noty-item">
                        <div className="item-content">
                            <div className="noty-icon">
                                <img src={timeImg} alt="kaiser working time"/>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><span className="subtitle">Mo. - Do. : </span></td>
                                        <td><span>08:00 - 12:30<br/>13:30 - 18 Uhr</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="subtitle">Freitag : </span></td>
                                        <td><span>08:00 - 12:30</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="noty-item">
                        <div className="item-content">
                            <div className="noty-icon">
                                <img src={callImg} alt="kaiser contact number"/>
                            </div>
                            <span>06241-4801780</span>
                        </div>
                        <div className="item-content">
                            <div className="noty-icon">
                                <img src={printImg} alt="kaiser print"/>
                            </div>
                            <span>06241-4801789</span>
                        </div>
                        <div className="item-content">
                            <div className="noty-icon">
                                <img src={symbol1Img} alt="kaiser contact email"/>
                            </div>
                            <span>info@kaiser-praxiskl</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar