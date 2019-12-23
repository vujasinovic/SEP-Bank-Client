import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "./API/AxiosInstance";


class App extends Component {
    state = {
        isLoading: true,
        cards: []
    };

    async componentDidMount() {
        const response = await axios.get('/cards');
        const body = response.data;
        this.setState({cards: body, isLoading: false});
    }

    render() {
        const {cards, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="App-intro">
                      {cards.map(card =>
                          <div>
                            <div class = "text-warning">
                            Card holder: {card.holderName}
                            </div>
                            <div>
                              Pan number: {card.pan}
                            </div>
                          </div>
                      )}
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
