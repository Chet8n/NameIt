import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/searchbox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {

        this.setState({
            headerExpanded: !(inputText.length > 0),
            suggestedNames: (inputText ? name(inputText) : [])
        });
    }

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}></Header>
                <SearchBox onInputChange={this.handleInputChange}></SearchBox>
                <ResultsContainer suggestedNames={this.state.suggestedNames}></ResultsContainer>
            </div>
        );
    }
}
export default App;
