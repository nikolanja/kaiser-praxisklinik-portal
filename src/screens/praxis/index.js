import React, { Component } from 'react';
import "./styles.scss"
import MainTemplate from '../../template/main'
import Headline from '../../components/headline'
import Subheadline from '../../components/subheadline'
import logoImg from '../../assets/images/image3.png'
import img1 from '../../assets/images/image7.png'
import img2 from '../../assets/images/image8.png'
import img3 from '../../assets/images/image9.png'
import img4 from '../../assets/images/image10.png'
import img5 from '../../assets/images/image11.png'
import img6 from '../../assets/images/image12.png'
import img7 from '../../assets/images/image13.png'
import $ from 'jquery'

export default class PraxisScreen extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        $('.nav-parallax li').click(function() {
            $(".nav-parallax li").removeClass("active");
            $(this).addClass('active');
            const target = $(this).attr('target');
            $('html').animate({scrollTop: $('#' + target).offset().top}, 1000)
            return false;
        })

        $(window).on('scroll', function() {
            var offsetY = $(window).scrollTop();
            if(offsetY < $('#section2').offset().top) {
                $(".nav-parallax li").removeClass("active");
                $(".nav-parallax li:nth-child(1)").addClass('active');
            } else if(offsetY < $('#section3').offset().top) {
                $(".nav-parallax li").removeClass("active");
                $(".nav-parallax li:nth-child(2)").addClass('active');
            } else if(offsetY < $('#section4').offset().top) {
                $(".nav-parallax li").removeClass("active");
                $(".nav-parallax li:nth-child(3)").addClass('active');
            } else if(offsetY < $('#section5').offset().top) {
                $(".nav-parallax li").removeClass("active");
                $(".nav-parallax li:nth-child(4)").addClass('active');
            } else if(offsetY < $('#section6').offset().top) {
                $(".nav-parallax li").removeClass("active");
                $(".nav-parallax li:nth-child(5)").addClass('active');
            } else if(offsetY > $('#section6').offset().top) {
                $(".nav-parallax li").removeClass("active");
                $(".nav-parallax li:nth-child(6)").addClass('active');
            }
        })
    }

    componentWillUnmount() {
        $('.nav-parallax li').unbind('click')
        $(window).off('scroll')
    }

    render () {
        return (
            <MainTemplate path="praxis">
                <div className="page-logo">
                    <img src={logoImg} alt=""/>
                </div>

                <div className="page-title">
                    <Headline title="praxis" />
                </div>
                
                <div className="reception-waiting-section">
                    <div className="parallax-tab">
                        <div className="title"><span>PRAXISRUNDGANG</span></div>
                        <div className="content">
                            <ul className="nav-parallax">
                                <li target="section1"><span>Empfang und Wartebereich</span></li>
                                <li target="section2"><span>Behandlungsräume</span></li>
                                <li target="section3"><span>Operativer Eingriffsraum</span></li>
                                <li target="section4"><span>Postoperative Überwachung</span></li>
                                <li target="section5"><span>Röntgen</span></li>
                                <li target="section6"><span>Ausstattung und Technik</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="reception-waiting-container" id="section1">
                        <Subheadline content="Empfang und Wartebereich" />
                        <div className="content-para">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content-images">
                            <div className="img-item"><img src={img1} alt="" /></div>
                            <div className="img-item"><img src={img2} alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className="main-section">

                    <div className="treatment-rooms section-item" id="section2">
                        <Subheadline content="Behandlungsräume" />
                        <div className="content-para">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content-images">
                            <div className="img-item"><img src={img3} alt="" /></div>
                            <div className="img-item"><img src={img4} alt="" /></div>
                            <div className="img-item"><img src={img5} alt="" /></div>
                        </div>
                    </div>

                    <div className="operative-intervention-space section-item" id="section3">
                        <Subheadline content="Operativer Eingriffsraum" />
                        <div className="content-para">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content-images">
                            <div className="img-item"><img src={img6} alt="" /></div>
                        </div>
                    </div>

                    <div className="postoperative-monitoring section-item" id="section4">
                        <Subheadline content="Postoperative Überwachung" />
                        <div className="content-para">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="roentgen section-item" id="section5">
                        <div className="content">
                            <Subheadline content="Röntgen" />
                            <div className="content-para">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="content-images">
                            <div className="img-item"><img src={img7} alt="" /></div>
                        </div>
                    </div>

                    <div className="equipment-technology section-item" id="section6">
                        <Subheadline content="Ausstattung und Technik" />
                        <div className="content-para">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="content-cards" align="center">
                            <div className="card-item"><span>Digitales 2D- und 3D-Röntgen / Digitale Volumentomographie (DVT)</span></div>
                            <div className="card-item"><span>3D-Implantatplanung</span></div>
                            <div className="card-item"><span>Ultraschallchirurgie (Piezochirurgie)</span></div>
                            <div className="card-item"><span>Operationen unter Lupenbrille</span></div>
                            <div className="card-item"><span>OP-Bereich mit Eingriffsraum</span></div>
                            <div className="card-item"><span>Überwachungsbereich sowie Aufwachraum</span></div>
                        </div>
                    </div>
                </div>
            </MainTemplate>
        )
    }
}