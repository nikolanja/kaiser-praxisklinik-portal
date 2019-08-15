import React, { Component } from 'react';
import "./styles.scss"
import MainTemplate from '../../template/main'
import logoImg from '../../assets/images/image6.png'
import Headline from '../../components/headline'
import $ from 'jquery'
import icon1 from '../../assets/images/icon5.png'
import icon2 from '../../assets/images/icon6.png'
import iconPDF from '../../assets/images/icon-pdf.png'

export default class ServiceScreen extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        $('.parallax .nav-parallax li').click(function() {
            $(".parallax .nav-parallax li").removeClass("active");
            $(this).addClass('active');
            const target = $(this).attr('target');
            $('html').animate({scrollTop: $('#' + target).offset().top}, 1000)
            return false;
        })

        $(window).on('scroll', function() {
            var offsetY = $(window).scrollTop();
            if(offsetY < $('#section2').offset().top) {
                $(".parallax .nav-parallax li").removeClass("active");
                $(".parallax .nav-parallax li:nth-child(1)").addClass('active');
            } else if(offsetY < $('#section3').offset().top) {
                $(".parallax .nav-parallax li").removeClass("active");
                $(".parallax .nav-parallax li:nth-child(2)").addClass('active');
            } else if(offsetY < $('#section4').offset().top) {
                $(".parallax .nav-parallax li").removeClass("active");
                $(".parallax .nav-parallax li:nth-child(3)").addClass('active');
            } else if(offsetY < $('#section5').offset().top) {
                $(".parallax .nav-parallax li").removeClass("active");
                $(".parallax .nav-parallax li:nth-child(4)").addClass('active');
            } else if(offsetY > $('#section5').offset().top) {
                $(".parallax .nav-parallax li").removeClass("active");
                $(".parallax .nav-parallax li:nth-child(5)").addClass('active');
            }
        })
    }

    componentWillUnmount() {
        $('.parallax .nav-parallax li').unbind('click')
        $(window).off('scroll')
    }

    onDownloadPDF() {
        alert('Please implement the file download process.')
    }

    render () {
        const boldStyle={
            color: '#09cde3',
            fontWeight: 600
        }

        return (
            <MainTemplate path="service">
                <div className="page-logo">
                    <img src={logoImg} alt=""/>
                </div>

                <div className="page-title">
                    <Headline title="service" />
                </div>

                <div className="service-section">
                    <div className="parallax-tab">
                        <div className="content parallax">
                            <ul className="nav-parallax">
                                <li target="section1"><span>Behandlungsablauf</span></li>
                                <li target="section2"><span>Überweisung</span></li>
                                <li target="section3"><span>Terminvergabe Telefon</span></li>
                                <li target="section4"><span>Terminvergabe Online</span></li>
                                <li target="section5"><span>Notfaillsituationen</span></li>
                            </ul>
                        </div>

                        <div className="content">
                            <img src={iconPDF} style={{marginBottom: '20px'}} alt="" />
                            <div className="title"><span>PDF herunterladen</span></div>
                            <ul className="nav-parallax">
                                <li onClick={() => this.onDownloadPDF()}><span>Behandlungsablauf</span></li>
                                <li onClick={() => this.onDownloadPDF()}><span>Überweisung</span></li>
                                <li onClick={() => this.onDownloadPDF()}><span>Terminvergabe Telefon</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-container">
                        <div className="service-item" id="section1">
                            <div className="service-title">
                                <img src={icon1} alt="" />
                                <span>Behandlungsablauf</span>
                            </div>
                            <div className="service-content">
                                <p>Eine kurzfristige Terminvereinbarung ist bei uns grundsätzlich möglich.<br/>Ihre überweisende Praxis kann sich direkt mit uns in Verbindung setzen, oder Sie können bei uns einen Termin vereinbaren.<br/><br/>Die Terminvergabe erfolgt telefonisch unter der Nummer 06241 4801790. Wenn Sie uns außerhalb der Öffnungszeiten anrufen, sprechen Sie bitte auf den Anrufbeantworter und wir rufen Sie so bald wie möglich zurück.<br/><br/>Alternativ bieten wir Ihnen eine Terminvergabe online.<br/><br/>In dringenden Fällen in unserem Fachgebiet ist eine Vorstellung ohne Termin ebenfalls möglich.</p>
                            </div>
                        </div>

                        <div className="service-item" id="section2">
                            <div className="service-title">
                                <img src={icon2} alt="" />
                                <span>Überweisung</span>
                            </div>
                            <div className="service-content">
                                <p>Den allgemeinen <span style={boldStyle}>Anamnesebogen</span> können Sie sich  gerne vorab als PDF herunterladen, zu Hause in Ruhe ausfüllen und anschließend mit in unsere Praxis bringen. Ansonsten erhalten Sie diesen bei Ihrer Anmeldung in der Praxis. Verhaltensregeln vor und nach einem <span style={boldStyle}>operativen Eingriff</span> finden Sie  als PDF zum Download.<br/>Bitte bringen Sie Folgendes zu Ihrem ersten Termin mit:<br/><br/>- Versichertenkarte<br/>- Überweisung Ihres Arztes oder Zahnarztes<br/>- falls vorhanden, aktuelle Röntgenbilder und Röntgenpass<br/>- falls vorhanden, Marcumar-, Allergie- oder Herzpass<br/>- Ihre Medikamentenliste und falls vorhanden, eine Diagnosenliste oder einen aktuellen Arztbrief (z. B. Ambulanter Arztbrief mit Nebendiagnosen, oder Entlassungsbericht nach Krankenhausaufenthalt)</p>
                            </div>
                        </div>

                        <div className="service-item" id="section3">
                            <div className="service-title">
                                <img src={icon1} alt="" />
                                <span>Terminvergabe Telefon</span>
                            </div>
                            <div className="service-content">
                                <p>Eine kurzfristige Terminvereinbarung ist bei uns grundsätzlich möglich.<br/>Ihre überweisende Praxis kann sich direkt mit uns in Verbindung setzen, oder Sie können bei uns einen Termin vereinbaren.<br/><br/>Die Terminvergabe erfolgt telefonisch unter der Nummer 06241 4801790. Wenn Sie uns außerhalb der Öffnungszeiten anrufen, sprechen Sie bitte auf den Anrufbeantworter und wir rufen Sie so bald wie möglich zurück.<br/><br/>Alternativ bieten wir Ihnen eine Terminvergabe online.<br/><br/>In dringenden Fällen in unserem Fachgebiet ist eine Vorstellung ohne Termin ebenfalls möglich.</p>
                            </div>
                        </div>

                        <div className="service-item" id="section4">
                            <div className="service-title">
                                <img src={icon1} alt="" />
                                <span>Terminvergabe Online</span>
                            </div>
                            <div className="service-content">
                                <p>Eine kurzfristige Terminvereinbarung ist bei uns grundsätzlich möglich.<br/>Ihre überweisende Praxis kann sich direkt mit uns in Verbindung setzen, oder Sie können bei uns einen Termin vereinbaren.<br/><br/>Die Terminvergabe erfolgt telefonisch unter der Nummer 06241 4801790. Wenn Sie uns außerhalb der Öffnungszeiten anrufen, sprechen Sie bitte auf den Anrufbeantworter und wir rufen Sie so bald wie möglich zurück.<br/><br/>Alternativ bieten wir Ihnen eine Terminvergabe online.<br/><br/>In dringenden Fällen in unserem Fachgebiet ist eine Vorstellung ohne Termin ebenfalls möglich.</p>
                            </div>
                        </div>

                        <div className="service-item" id="section5">
                            <div className="service-title">
                                <img src={icon1} alt="" />
                                <span>Notfaillsituationen</span>
                            </div>
                            <div className="service-content">
                                <p>Eine kurzfristige Terminvereinbarung ist bei uns grundsätzlich möglich.<br/>Ihre überweisende Praxis kann sich direkt mit uns in Verbindung setzen, oder Sie können bei uns einen Termin vereinbaren.<br/><br/>Die Terminvergabe erfolgt telefonisch unter der Nummer 06241 4801790. Wenn Sie uns außerhalb der Öffnungszeiten anrufen, sprechen Sie bitte auf den Anrufbeantworter und wir rufen Sie so bald wie möglich zurück.<br/><br/>Alternativ bieten wir Ihnen eine Terminvergabe online.<br/><br/>In dringenden Fällen in unserem Fachgebiet ist eine Vorstellung ohne Termin ebenfalls möglich.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainTemplate>
        )
    }
}