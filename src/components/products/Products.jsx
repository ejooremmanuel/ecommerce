import React, {useContext}  from 'react';
import './products1.css';
import {Link} from "react-router-dom";
import {Container} from "semantic-ui-react";
import {CartContext} from "../../context/CartContext";


const Products = () => {
    const {setTitle, setProductImage, setProductPrice} = useContext(CartContext);
    return (
        
        <div className="products">
            <p className="header"><h3><b>Recent Products</b></h3><h5 className="view">View more</h5></p>
            <div className="product-container">
                <div className="item1 item">
                    <img className="img1" src="https://res.cloudinary.com/chiedozie/image/upload/v1635757380/Grp2BigImage_lbvcu5.png" alt="" />
                    <div className="text">
                        <h5>Grey Backpack</h5>
                        <div className="downpart">
                        <p className="a"><del>$40.00</del></p>
                        <b className="bold">$35.00</b>
                        </div>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item2 item">
                    <img className="image" src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/backpack_o5xzkr.png" alt="" />
                    <div className="text">
                        <h5>Brown Backpack</h5>
                        <div className="downpart">
                        <p className="a"><del>$35.00</del></p>
                        <b className="bold">$30.00</b>
                        </div>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item3 item">
                    <img className="image" src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/hat_i70lnl.png" alt="" />
                    <div className="text">
                        <h5>Black Hat</h5>
                        <div className="downpart">
                        <p className="a"><del>$20.00</del></p>
                        <b className="bold">$15.00</b>
                        </div>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item4 item">
                    <img className="image" src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/brownflatshoe_ci9qcz.jpg" alt="" />
                    <div className="text">
                        <h5>Brown Shoe</h5>
                        <div className="downpart">
                        <p className="a"><del>$45.00</del></p>
                        <b className="bold">$40.00</b>
                        </div>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item5 item">
                    <img className="image" src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/pinkshoe_mjliqo.png" alt="" />
                    <div className="text">
                        <h5>Pink Sneakers</h5>
                        <div className="downpart">
                        <p className="a"><del>$50.00</del></p>
                        <b className="bold">$45.00</b>
                        </div>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
