import React, { Component } from 'react';
import './styles.scss'
import MainTemplate from '../../template/main'
import rellaxImg from '../../assets/images/image1.png'
import serviceImg from '../../assets/images/image2.png'
import praxisLogoImg from '../../assets/images/praxis-logo.png'
import Headline from '../../components/headline'
import Subheadline from '../../components/subheadline'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
import avatarImg1 from '../../assets/images/avatar1.png'
import avatarImg2 from '../../assets/images/avatar2.png'
import avatarImg3 from '../../assets/images/avatar3.png'
import avatarImg4 from '../../assets/images/avatar4.png'

const styles = {
    rellax: {
        backgroundImage: `url(${rellaxImg})`,
    },
    service: {
        backgroundImage: `url(${serviceImg})`,
    },
    notfalltel: {
        color: '#09CDE3',
        fontWeight: 600
    }
}

const members = [
    { image: avatarImg1, name: 'Veronica Anluz', note: 'Principal Dentist' },
    { image: avatarImg2, name: 'Veronica Anluz', note: 'Principal Dentist' },
    { image: avatarImg3, name: 'Veronica Anluz', note: 'Principal Dentist' },
    { image: avatarImg4, name: 'Veronica Anluz', note: 'Principal Dentist' },
]

export default class StartScreen extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {

    }

    render () {
        return (
            <MainTemplate path="start">
                <div className="start-rellax" style={styles.rellax}>
                    <div className="start-rellax-container">
                        <div className="subtitle"><span>Innovative Technologie</span></div>
                        <div className="headtitle"><span>Zertifizierter Zahnarzt</span></div>
                        <div className="content"><p>Als spezialisierte Praxisklinik für Mund-Kiefer-Gesichtschirurgie, wollen wir Ihnen eine medizinische Versorgung von höchster Qualität nach dem aktuellen Stand der Wissenschaft anbieten. Kompetenz (über 18 Jahren Berufserfahrung) …</p></div>
                    </div>
                </div>

                <div className="start-praxis">
                    <div className="start-praxis-container">
                        <div className="praxis-logo">
                            <img src={praxisLogoImg} alt="" />
                        </div>
                        <div className="praxis-content">
                            <div className="praxis-head"><Headline title="praxis" /></div>
                            <div className="praxis-subhead"><Subheadline content="Ausstattung und Technik" /></div>
                            <div className="praxis-para"><p className="desc-para">In unserer Praxis kommen moderne technische Verfahren und Geräte zum Einsatz. Diese spielen in der MKG-Chirurgie eine große Rolle, denn mit ihrer Hilfe können wir sowohl die Diagnostik als auch die Behandlung oftmals einfacher, schneller, für Patienten angenehmer und erfolgversprechender durchführen. Die konkreten Vorteile für Sie erklären wir Ihnen gern in unserer persönlichen Beratung.</p></div>
                        </div>
                    </div>
                </div>
                
                <div className="start-leistungen">
                    <div className="start-leistungen-container">
                        <div className="leistungen-content">
                            <div className="praxis-head"><Headline title="leistungen" /></div>
                            <div className="praxis-subhead"><Subheadline content="Ihr Lächeln ist unsere Leidenschaft" /></div>
                            <div className="praxis-para"><p className="desc-para">In unserer Praxis kommen moderne technische Verfahren und Geräte zum Einsatz. Diese spielen in der MKG-Chirurgie eine große Rolle, denn mit ihrer Hilfe können wir sowohl die Diagnostik als auch die Behandlung oftmals einfacher, schneller, für Patienten angenehmer und erfolgversprechender durchführen. Die konkreten Vorteile für Sie erklären wir Ihnen gern in unserer persönlichen Beratung.</p></div>
                        </div>
                        <div className="leistungen-logo">
                            <div className="leistungen-logo-item" align="center">
                                <div className="leistungen-logo-item-content" align="center">
                                    <img src={icon1} alt="" />
                                    <span>Parodontalchirurgie</span>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                                </div>
                            </div>

                            <div className="leistungen-logo-item" align="center">
                                <div className="leistungen-logo-item-content" align="center">
                                    <img src={icon2} alt="" />
                                    <span>Entfernung von Weisheitszähnen</span>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                                </div>
                            </div>

                            <div className="leistungen-logo-item" align="center">
                                <div className="leistungen-logo-item-content" align="center">
                                    <img src={icon3} alt="" />
                                    <span>Zahnaufhellung</span>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                                </div>
                            </div>

                            <div className="leistungen-logo-item" align="center">
                                <div className="leistungen-logo-item-content" align="center">
                                    <img src={icon4} alt="" />
                                    <span>Kosmetische Zahnspangen</span>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="start-service" style={styles.service}>
                    <div className="start-service-container">
                        <div className="service-head"><Headline white title="service" /></div>
                        <div className="content"><p>Eine kurzfristige Terminvereinbarung ist bei uns grundsätzlich möglich. Ihre überweisende Praxis kann sich direkt mit uns in Verbindung setzen, oder Sie können bei uns einen Termin vereinbaren.</p></div>
                    </div>
                </div>

                <div className="start-team">
                    <div className="start-team-container">
                        <div className="team-content">
                            <div className="team-head"><Headline title="team" /></div>
                            <div className="team-subhead"><Subheadline content="Ihr Lächeln ist unsere Leidenschaft" /></div>
                            <div className="team-para"><p className="desc-para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p></div>
                        </div>

                        <div className="team-members">
                            {
                                members.map((member, index) => (
                                    <div className="member-item" key={index} align="center">
                                        <img src={member.image} alt="" />
                                        <div className="member-name"><span>{member.name}</span></div>
                                        <div className="member-career"><span>{member.note}</span></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="start-kontakt">
                    <div className="start-kontakt-container">
                        <div className="kontakt-content">
                            <div className="kontakt-head"><Headline title="kontakt" /></div>
                            <div className="kontakt-para"><p className="desc-para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p></div>
                        </div>
                        <div className="kontakt-info">
                            <div className="kontakt-item open-hour">
                                <div className="title"><span>Öffnungszeiten:</span></div>
                                <div className="content">
                                    <p>Montag - Donnerstag:<br />08:30 - 12:30 Uhr<br />13:30 - 18 Uhr<br /><br />Freitag:<br />08:30 - 12:30 Uhr</p>
                                </div>
                            </div>
                            <div className="kontakt-item telephone">
                                <div className="title"><span>Telefon:</span></div>
                                <div className="content">
                                    <p>Tel.: 06241 - 4801780<br />Fax: 06241 - 4801789<br /><br /><span style={styles.notfalltel}>Notfalltel.:<br />06241 - 4801780</span></p>
                                </div>
                            </div>
                            <div className="kontakt-item email">
                                <div className="title"><span>E-Mail:</span></div>
                                <div className="content">
                                    <p>info@kaiser-praxisklinik.de</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainTemplate>
        )
    }
}