import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.jsx';
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
            </div>
        );
    }
}