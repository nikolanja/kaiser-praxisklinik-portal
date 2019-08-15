import React, { Component } from 'react'
import './styles.scss'
import logoImg from '../../assets/images/logo.png'

export default class KaiserLogo extends Component {
    render (){
        return (
            <div className="logo-container">
                <img src={logoImg} alt="Kaiser-Praxisklinik Logo"/>
                <div className="description">
                    <span className="title">Kaiser-Praxisklinik</span>
                    <span className="subject">für Mund-Kiefer-Gesichtschirurgie</span>
                </div>
            </div>
        )
    }
}