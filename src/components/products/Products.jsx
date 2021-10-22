import React from 'react';
import './products1.css';
import Girl from '../../img/girlbackpack.jpg';
import Bag from '../../img/backpack.png';
import Hat from '../../img/hat.png';
import Shoe from '../../img/brownflatshoe.jpg';
import Sneakers from '../../img/pinkshoe.png';

const Products = () => {
    return (
        // <div className="products">
        //     <h3>Recent products</h3>
        //     <div className="product">
                
        //         <div className="item__one">
        //             <img src={Girl} alt="" />
        //         </div>
        //         <div className="item__two">
        //             <div className="item__two__product1">
        //                 <img src={Bag} alt="" />
        //             </div>
        //             <div className="item__two__product2">
        //                 <img src={Shoe} alt="" />
        //             </div>
        //         </div>
        //         <div className="item__three">
        //         <div className="item__three__product1">
        //             <img src={Hat} alt="" />
        //         </div>
        //             <div className="item__three__product2">
        //                 <img src={Sneakers} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <h3>Recent Products</h3>
            <div className="product-container">
                <div className="item1 item">
                    <img className="img1" src={Girl} alt="" />
                    <div className="text">
                        <h3>Product Name</h3>
                        <p>$15.00</p>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item2 item">
                    <img className="image" src={Bag} alt="" />
                    <div className="text">
                        <h3>Product Name</h3>
                        <p>$15.00</p>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item3 item">
                    <img className="image" src={Hat} alt="" />
                    <div className="text">
                        <h3>Product Name</h3>
                        <p>$15.00</p>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item4 item">
                    <img className="image" src={Shoe} alt="" />
                    <div className="text">
                        <h3>Product Name</h3>
                        <p>$15.00</p>
                        <div className="span_container">
                        <span className="span1">Sold : 29 </span>
                        <span className="span2"> Available : 12</span>
                        </div>
                    </div>
                </div>
                <div className="item5 item">
                    <img className="image" src={Sneakers} alt="" />
                    <div className="text">
                        <h3>Product Name</h3>
                        <p>$15.00</p>
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
