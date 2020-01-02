import React, { Component } from 'react'
import axios from 'axios';
import BottomNavigation from './BottomNavigation'
import Navbar from './Navbar'
import { Button, Container } from '@material-ui/core';
import logo from '../image/logo.png'
import TuneIcon from '@material-ui/icons/Tune';
import Map from './Map'


export default class Suggestions extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <BottomNavigation />

                <Map />

                <Container className="Button ">
                    <Button
                     variant="contained" color="green" href="#contained-buttons" 
                    style={{ backgroundColor: 'white', height: '40px', color: ' rgb(44, 109, 106)' }} >
                        <TuneIcon />  
                        </Button>
                    <Button 
                    variant="contained" color="green" href="Suggestions"
                     style={{ marginLeft: '10px', height: '40px', width: '15%', backgroundColor: 'white', color: ' rgb(44, 109, 106)' }}>
                        اقتراح اخر 
                        </Button>
                </Container>

            </div>
        )
    }
}