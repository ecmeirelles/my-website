import React, { Component } from 'react';

import './app.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './redux/actions';

class App extends Component {
    state = {
        inputValue: ''
    };

    _inputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
        const {
            newValue,
            clickButton
        } = this.props;
        return (
            <div className="app" style={{ paddingTop: '10px' }}>
                <input
                    onChange={this._inputChange}
                    type='text'
                    value={this.state.inputValue}
                />
                <button onClick={() => clickButton(this.state.inputValue)}>
                    Click me!
                </button>
                <h1>{ newValue }</h1>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    newValue: store.clickState.newValue
});
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ clickButton }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
