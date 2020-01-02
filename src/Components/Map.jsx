import React, { Component } from 'react'
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const mapStyles = {
    width: '50%',
    height: '60%',
    marginLeft: '25%'

};

export class MapContainer extends Component {


    state = {
        stores: [],
        data: {}
    }

    componentDidMount() {
        axios.get(`https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993`)
            .then(res => {
                this.setState({
                    data: res.data
                })

            }).catch(err => console.log(err)
            )
    }


    constructor(props) {
        super(props);

        this.state = {
            stores: [{ lat: 26.28871013107, lng: 50.220986548449 },
            { latitude: 26.28871013107, longitude: 50.220986548449 },
                // {latitude: 47.2052192687988, longitude: -121.988426208496},
                // {latitude: 47.6307081, longitude: -122.1434325},
                // {latitude: 47.3084488, longitude: -122.2140121},
                // {latitude: 47.5524695, longitude: -122.0425407}
            ]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 23.8859, lng: 45.0792 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCbQWmz-A6H_vh9-C5btIKd_WUTcOscWPI'
})(MapContainer);
