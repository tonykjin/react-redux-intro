import React, { Component } from 'react';
import { connect } from 'react-redux'; //higher order component - function that takes in a Component as an argument and returns a component;
            // connect is used to connect the component to the redux store. used so that the component can interact with the redux store.
import { tick } from '../actions';

class Clock extends Component {
    componentDidMount() {
        setInterval(this.props.tickAction, 1000);
    }

    render() {
        console.log('Clock Props:', this.props);
        return(
            <h1>{this.props.time}</h1>
        )
    }
}

const mapStateToProps = state => { //entirety of redux state.
    console.log(state);
    return {
        time: state.clock.time
    }
}
const mapDispatchToProps = dispatch => {
    return {
        tickAction: () => dispatch(tick)
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Clock); //connect returns a function so we pass 'Clock' component as an argument