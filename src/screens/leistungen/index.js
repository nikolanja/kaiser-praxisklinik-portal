import React, { Component } from 'react';
import "./styles.scss"
import MainTemplate from '../../template/main'
import logoImg from '../../assets/images/image5.png'
import Headline from '../../components/headline'
import image1 from '../../assets/images/image14.png'
import image2 from '../../assets/images/image15.png'
import image3 from '../../assets/images/image16.png'

const services = [
    {image: image1, description: 'Manchmal müssen die Weisheitszähne, die aufgrund der Platzverhältnisse oder Position nicht durchbrechen, operativ entfernt werden.\nDieser Routine-Eingriff in der Mund-Kiefer-Gesichtschirurgie gilt als risikoarm, welcher problemlos ambulant vorgenommen werden kann. Die Entfernung eines oder mehrerer Weisheitszähne kann in unserer unter lokaler Betäubung, lokaler Betäubung + Dämmerschlaf (mit postoperativer Überwachung) oder, wenn die Indikation besteht, unter Vollnarkose in unserer Praxisklinik. Um die genaue Lage des Weisheitszahnes festzustellen und Folgeschäden zu vermeiden, kann präoperativ eine 3D-Bildgebung angefertigt werden.'},
    {image: image2, description: 'Manchmal müssen die Weisheitszähne, die aufgrund der Platzverhältnisse oder Position nicht durchbrechen, operativ entfernt werden.\nDieser Routine-Eingriff in der Mund-Kiefer-Gesichtschirurgie gilt als risikoarm, welcher problemlos ambulant vorgenommen werden kann. Die Entfernung eines oder mehrerer Weisheitszähne kann in unserer unter lokaler Betäubung, lokaler Betäubung + Dämmerschlaf (mit postoperativer Überwachung) oder, wenn die Indikation besteht, unter Vollnarkose in unserer Praxisklinik. Um die genaue Lage des Weisheitszahnes festzustellen und Folgeschäden zu vermeiden, kann präoperativ eine 3D-Bildgebung angefertigt werden.'},
    {image: image3, description: 'Manchmal müssen die Weisheitszähne, die aufgrund der Platzverhältnisse oder Position nicht durchbrechen, operativ entfernt werden.\nDieser Routine-Eingriff in der Mund-Kiefer-Gesichtschirurgie gilt als risikoarm, welcher problemlos ambulant vorgenommen werden kann. Die Entfernung eines oder mehrerer Weisheitszähne kann in unserer unter lokaler Betäubung, lokaler Betäubung + Dämmerschlaf (mit postoperativer Überwachung) oder, wenn die Indikation besteht, unter Vollnarkose in unserer Praxisklinik. Um die genaue Lage des Weisheitszahnes festzustellen und Folgeschäden zu vermeiden, kann präoperativ eine 3D-Bildgebung angefertigt werden.'}
]

class NavItem extends Component {
    render() {
        if(this.props.type === this.props.itemname){
            return (
                <li className="active">
                    <span>{this.props.itemname}</span>
                </li>
            )
        }

        return (
            <li onClick={() => this.props.setType(this.props.itemname)}><span>{this.props.itemname}</span></li>
        )
    }
}

export default class LeistungenScreen extends Component {
    constructor() {
        super()
        this.state = {
            type: 'Zahnärztliche Chirurgie'
        }
    }

    render () {
        return (
            <MainTemplate path="leistungen">
                <div className="page-logo">
                    <img src={logoImg} alt=""/>
                </div>

                <div className="page-title">
                    <Headline title="leistungen" />
                </div>

                <div className="leistungen-section">
                    <div className="parallax-tab">
                        <div className="head-title"><span>UNSERE LEISTUNGEN</span></div>
                        <div className="title"><span>INFORMATION FÜR UNSERE PATIENTEN</span></div>
                        <div className="content">
                            <ul className="nav-parallax paitents">
                                <NavItem type={this.state.type} itemname='Zahnärztliche Chirurgie' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='Zahnimplantate' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='Kieferaufbau und Augmentation' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='Gesichtsverletzungen' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='Haut- und Tumorchirurgie' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='Plastische/ästhetische Eingriffe im Gesicht' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='Anästhesie' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='3D-Bildgebung' setType={(type) => this.setState({type})} />
                            </ul>
                        </div>

                        <div className="title"><span>INFORMATION FÜR KOLLEGEN</span></div>
                        <div className="content">
                            <ul className="nav-parallax">
                                <NavItem type={this.state.type} itemname='Gesamt-Behandlungsspektrum' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='DVT-Diagnostik' setType={(type) => this.setState({type})} />
                                <NavItem type={this.state.type} itemname='Eingriffsbereich' setType={(type) => this.setState({type})} />
                            </ul>
                        </div>
                    </div>

                    <div className="leistungen-container">
                        {
                            services.map((service, index) => (
                                <div className="service-item" key={index}>
                                    <img src={service.image} alt="" />
                                    <div className="desc">
                                        <div className="para" align="left">
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MainTemplate>
        )
    }
}