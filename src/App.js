import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';

/*function App() {
  return (*/



const particleOptions = {
    particles: {
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
            }
        },
        number: {
            value: 105,
            density: {
                enable: true,
                value_area: 800

            }
        }
        
    }}
class App extends Component {
    constructor() {
        super();
        this.state= {
            input: '',
        }
    }
    onInputchange = (event) => {
        console.log(event.target.value);
    }
    onButtonSubmit = () => {
        console.log('click');
    }
    render() {
        return (
            <div className="App">
                <Particles className='particles'
                    params={particleOptions}
                   
                />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm onInputchange={this.onInputchange}
                    onButtonSubmit={this.onButtonSubmit} />
               
                { /*  <Logo />
                <ImageLinkForm />
                <FaceRecognition/>*/}

            </div>
        );
    }
}

export default App;
