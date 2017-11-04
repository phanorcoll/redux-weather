import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxLogo from '../images/redux_logo.png';
class TestContainer extends Component {

    render() {
        return ( 
            <div>
                <div><img src={ReduxLogo} /></div>
                <div>hello Redux world <i className="fa fa-globe" aria-hidden="true"></i></div>
                <div>- {this.props.test[0].title}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        test: state.test
    };
}

export default connect(mapStateToProps)(TestContainer);