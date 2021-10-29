import React from 'react';
import './products1.css';
import Girl from '../../img/girlbackpack.jpg';
import Bag from '../../img/backpack.png';
import Hat from '../../img/hat.png';
import Shoe from '../../img/brownflatshoe.jpg';
import Sneakers from '../../img/pinkshoe.png';

const Products = () => {
    return (
        
        <div className="products">
            <p className="header"><h3><b>Recent Products</b></h3><h5 className="view">View more</h5></p>
            <div className="product-container">
                <div className="item1 item">
                    <img className="img1" src={Girl} alt="" />
                    <div className="text">
                        <h5>Product Name</h5>
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
                <div className="item2 item">
                    <img className="image" src={Bag} alt="" />
                    <div className="text">
                        <h5>Product Name</h5>
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
                <div className="item3 item">
                    <img className="image" src={Hat} alt="" />
                    <div className="text">
                        <h5>Product Name</h5>
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
                    <img className="image" src={Shoe} alt="" />
                    <div className="text">
                        <h5>Product Name</h5>
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
                <div className="item5 item">
                    <img className="image" src={Sneakers} alt="" />
                    <div className="text">
                        <h5>Product Name</h5>
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
            </div>
        </div>
    )
}

export default Products
