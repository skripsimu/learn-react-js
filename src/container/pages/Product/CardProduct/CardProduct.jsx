import Counter from "../Counter/Counter";
import React, { Component } from "react";



class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://asset.kompas.com/crops/BpY2l8NQHMS5EMP9hizzGcmW1bs=/0x5:900x605/750x500/data/photo/2018/07/16/1439370499.jpg" alt="" />
                </div>
                <p className="product-title">Daging ayam</p>
                <p className="product-price">Rp. 143.000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;