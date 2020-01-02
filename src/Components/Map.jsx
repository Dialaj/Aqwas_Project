import React, { Component } from "react";
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import BottomNavigation from "./BottomNavigation";
import Navbar from "./Navbar";
import { Button, Container } from "@material-ui/core";
import TuneIcon from "@material-ui/icons/Tune";


const mapStyles = {
  width: "50%",
  height: "60%",
  marginLeft: "25%"
};


export class MapContainer extends Component {
  state = {
    latitude: 26.290390355126,
    longitude: 50.180711161584,
    suggestion: {}
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({
          latitude: latitude,
          longitude: longitude,
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
  displayMarkers = () => {
    // return this.state.stores.map((store, index) => {
    return (
      <Marker
        position={{
          lat: this.state.latitude,
          lon: this.state.longitude
        }}
        onClick={() => console.log("You clicked me!")}
      />
    );
    // });
  };
  getSuggestion = async (e) => {
    e.preventDefault();
    let curState = { ...this.state };
    let res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://wainnakel.com/api/v1/GenerateFS.php?uid=,undefined,undefined${this.state.latitude},${this.state.longitude}&get_param=value`
       
      
    );
    console.log(res);
    curState.suggestion.name = res.data.name;
    curState.suggestion.cat = res.data.catName;
    curState.suggestion.rate = res.data.rate;
    this.setState(curState);
  };
  render() {
    console.log(this.state);
    const { suggestion } = this.state;
    return (
      <>
        <Navbar />
        <BottomNavigation />
        <h3>{suggestion.name}</h3>
        <h3>{suggestion.rate}/10</h3>
        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{ lat: 23.8859, lng: 45.0792 }}
        >
          {/* {this.displayMarkers()} */}
          <Marker
            //   key={index}
            //   id={index}
            position={{
              lat: this.state.latitude,
              lng: this.state.longitude
            }}
            onClick={() => console.log("You clicked me!")}
          />
        </Map>
        <Container className="Button ">
          <Button
            variant="contained"
            href="#contained-buttons"
            style={{
              backgroundColor: "white",
              height: "40px",
              color: " rgb(44, 109, 106)"
            }}
          >
            <TuneIcon />
          </Button>
          <Button
            variant="contained"
            href="Suggestions"
            style={{
              marginLeft: "10px",
              height: "40px",
              width: "15%",
              backgroundColor: "white",
              color: " rgb(44, 109, 106)"
            }}
            onClick={this.getSuggestion}
          >
            اقتراح اخر
          </Button>
        </Container>
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCbQWmz-A6H_vh9-C5btIKd_WUTcOscWPI"
})(MapContainer);
