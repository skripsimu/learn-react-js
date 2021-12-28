
import React, { Component } from "react";
import { GlobalConsumer } from "../../../../context/context";
// import { connect } from 'react-redux';
// import ActionType from "../../../../redux/reducer/globalActionType";

class Counter extends Component {

    render() {
        console.log(this);
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: 'REMOVE_ORDER' })}>-</button>
                <input onChange={() => null} type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({ type: 'ADD_ORDER' })}>+</button>
            </div>

        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: ActionType.ADD_ORDER }),
//         handleMinus: () => dispatch({ type: ActionType.REMOVE_ORDER }),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);