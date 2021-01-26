import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';

/*function App() {
  return (*/


const app = new Clarifai.App({
    apiKey: '0273b371fcb346b8a3b3af6240611605'
});
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
            imageUrl:''
        }
    }
    onInputchange = (event) => {
        this.setState({input: event.target.value });
    }
    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models.predict(Clarifai.FACE_DETECT_MODEL,
            this.state.input).then(
            function (response) {
                console.log('check',response);
            },
            function (err) {
            }
        );
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
               
                <FaceRecognition imageUrl={this.state.imageUrl}/>

            </div>
        );
    }
}

export default App;
