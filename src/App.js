import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBasicInfo} from "./redux/actions";
import './app.css';

class App extends Component {
    componentDidMount() {
        const { fetchBasicInfoD } = this.props;
        fetchBasicInfoD();
    }

    render() {
        const { basicInfo } = this.props;
        if (basicInfo === undefined) {
            return (
                <div className="app" style={{ paddingTop: '10px' }}>
                    <p>Loading...</p>
                </div>
            )
        }
        return (
            <div className="app" style={{ paddingTop: '10px' }}>
                <p>{ basicInfo.name }</p>
            </div>
        );
    }
}

/*const mapStateToProps = (store) => ({
    newValue: store.clickState.newValue
});
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ clickButton }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(App);*/
export default connect(
    (state) => ({
        basicInfo: state.basicInfo.basicInfo
    }),
    (dispatch) => ({
        fetchBasicInfoD: () => dispatch(fetchBasicInfo())
    })
)(App);
