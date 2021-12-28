
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";
import React, { Component, Fragment } from "react";
// import { RootContext } from "../../Home/Home";
import { GlobalConsumer } from "../../../context/context";
// import {connect} from 'react-redux';

class Product extends Component {

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="http://etanee.co.id/wp-content/uploads/2018/09/logo-96px.png" width={100} />
                    </div>
                    <div className="troley">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/add-cart-2130862-1794993.png" />
                        <div className="count"  >{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);