import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBasicInfo} from './redux/actions';

class App extends Component {
    componentDidMount() {
        const { fetchBasicInfoD } = this.props;
        fetchBasicInfoD();
    }

    render() {
        const { basicInfo } = this.props;
        if (basicInfo === undefined) {
            return (
                <div style={{ textAlign: 'center', paddingTop: 10 }}>
                    <p>Loading...</p>
                </div>
            )
        }
        return (
            <div style={{ textAlign: 'center', paddingTop: 10 }}>
                <p>{ basicInfo.name }</p>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        basicInfo: state.basicInfo.basicInfo
    }),
    (dispatch) => ({
        fetchBasicInfoD: () => dispatch(fetchBasicInfo())
    })
)(App);
