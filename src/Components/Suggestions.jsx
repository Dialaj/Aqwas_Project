import React, { Component } from 'react'
import axios from 'axios';
import BottomNavigation from './BottomNavigation'
import Navbar from './Navbar'
import { Button, Container } from '@material-ui/core';
import logo from '../image/logo.png'
import TuneIcon from '@material-ui/icons/Tune';
import Map from './Map'


export default class Suggestions extends Component {

    state = {
        Suggest: [],
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


    render() {
        return (
            <div>


                <Navbar />
                <BottomNavigation />

             
                    <Map />
          


                <Container className="Button ">
                    <Button variant="contained" color="primary" href="#contained-buttons" style={{ backgroundColor: 'white', height: '40px', color: ' rgb(44, 109, 106)' }} >
                        <TuneIcon />  </Button>
                    <Button variant="contained" color="primary" href="Suggestions" style={{ marginLeft: '10px', height: '40px', width: '15%', backgroundColor: 'white', color: ' rgb(44, 109, 106)' }}>
                        اقتراح اخر </Button>
                </Container>
                {/* {this.data.name}
                {this.data.id}
                {this.data.rate}
                {this.data.catName}
                {this.data.isFav}
                {this.data.lat}
                {this.data.lon}
                {this.data.imgs}
                {this.data.price} 
                {this.data.link} 
                {this.data.phoneNumber} 
                {this.data.isOpen} */}
                {/* <ul>
                    {this.state.Suggest.map(Suggests => <li>{Suggests.name}</li>)}
                </ul> */}





            </div>
        )
    }
}