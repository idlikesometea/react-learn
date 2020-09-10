import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, error: '' };
    
    componentDidMount() {
        this.getUserLocation();
    }

    getUserLocation() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ error: err.message })
        );
    }

    renderContent() {
        if (this.state.error && !this.state.lat) {
            return <div>Error: {this.state.error} </div>;
        }

        if (!this.state.error && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;
    }

    render() {
        return(
            <div>{this.renderContent()}</div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));