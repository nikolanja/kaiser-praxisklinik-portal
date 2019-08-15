import React, { Component } from 'react';
import "./styles.scss"
import MainTemplate from '../../template/main'
import logoImg from '../../assets/images/image4.png'
import Headline from '../../components/headline';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const styles = {
    notfalltel: {
        color: '#09CDE3',
        fontWeight: 600
    }
}

class KontaktScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <MainTemplate path="kontakt">
                <div className="page-logo">
                    <img src={logoImg} alt=""/>
                </div>
                <div className="start-kontakt general">
                    <div className="start-kontakt-container">
                        <div className="kontakt-content">
                            <div className="kontakt-head"><Headline title="kontakt" /></div>
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
                <div className="location-section">
                    <Map
                        google={this.props.google}
                        zoom={8}
                        style={{width: '100%', height: '100%'}}
                        initialCenter={{ lat: 47.444, lng: -122.176}} >
                        <Marker position={{ lat: 48.00, lng: -122.00}} />
                    </Map>
                </div>
            </MainTemplate>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
})(KontaktScreen);