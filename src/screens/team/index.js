import React, { Component } from 'react';
import "./styles.scss"
import MainTemplate from '../../template/main'
import logoImg from '../../assets/images/image4.png'
import Headline from '../../components/headline'
import avatarImg1 from '../../assets/images/avatar1.png'
import avatarImg2 from '../../assets/images/avatar2.png'
import avatarImg3 from '../../assets/images/avatar3.png'
import avatarImg4 from '../../assets/images/avatar4.png'

const members = [
    {avatar: avatarImg1, name: 'Veronica Anluz', career: 'Principal Dentist', desc: '„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et“'},
    {avatar: avatarImg2, name: 'Veronica Anluz', career: 'Principal Dentist', desc: '„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et“'},
    {avatar: avatarImg3, name: 'Veronica Anluz', career: 'Principal Dentist', desc: '„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et“'},
    {avatar: avatarImg4, name: 'Veronica Anluz', career: 'Principal Dentist', desc: '„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et“'},
]

export default class TeamScreen extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {

    }

    render () {
        return (
            <MainTemplate path="team">
                <div className="page-logo">
                    <img src={logoImg} alt=""/>
                </div>

                <div className="page-title">
                    <Headline title="team" />
                </div>

                <div className="team-section">
                    <div className="team-container">
                        <span className="team-desc">Ihr Lächeln ist unsere Leidenschaft</span>
                        <div className="team-members">
                        {
                            members.map((member, index) => (
                                <div className="team-member" key={index} align="center">
                                    <img src={member.avatar} alt="" />
                                    <div className="name"><span>{member.name}</span></div>
                                    <div className="career"><span>{member.career}</span></div>
                                    <div className="desc"><p>{member.desc}</p></div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </MainTemplate>
        )
    }
}