import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';
import logo from '../image/logo.png'
import TuneIcon from '@material-ui/icons/Tune';


export default class Home extends Component {


    render() {
        return (
            <div className="App">

                <Container className="logo">

                    <img src={logo} />
                </Container>

                <Container className="Button ">
                    <Button
                        variant="contained" color="primary" href="#contained-buttons"
                        style={{ backgroundColor: 'white', height: '40px', color: ' rgb(44, 109, 106)' }} >
                        <TuneIcon />
                    </Button>
                    <Button
                        variant="contained" color="primary" href="Suggestions"
                        style={{ marginLeft: '10px', height: '40px', width: '15%', backgroundColor: 'white', color: ' rgb(44, 109, 106)' }}>
                        اقترح
                        </Button>
                </Container>


            </div>
        )
    }
}
