import React, { Component, Fragment } from "react";
import { GlobalConsumer } from "../../../context/context";
import "./LifeCycleComponent.css";
// import {connect} from 'react-redux';


class LifeCycleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount")
        setTimeout(() =>
            this.setState({ count: 2 }), 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        if (nextState.count > 5) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    changeCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render")
        return (
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr />
                <button className="btn" onClick={this.changeCounter}>Component Button {this.state.count}</button>
                <p>Total order: {this.props.state.totalOrder} </p>
            </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComponent);
export default GlobalConsumer(LifeCycleComponent);