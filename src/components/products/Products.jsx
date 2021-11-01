import React, { useContext } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const { setTitle, setProductImage, setProductPrice } =
    useContext(CartContext);
  return (
    <Container>
      <div className="products">
        <div className="products-header">
          <h3>Recent Products</h3>
          <h5>View more</h5>
        </div>

        <div className="product-container">
          <div>
            <Link to="/cart">
              <div
                className="item1-product"
                onClick={() => {
                  setTitle("Grey Backpack");
                  setProductPrice(35);
                  setProductImage(
                    "https://res.cloudinary.com/chiedozie/image/upload/v1635757380/Grp2BigImage_lbvcu5.png"
                  );
                }}
              >
                <img
                  className="img1"
                  src="https://res.cloudinary.com/chiedozie/image/upload/v1635757380/Grp2BigImage_lbvcu5.png"
                  alt=""
                />
                <div className="text">
                  <h5>Grey Backpack</h5>
                  <div className="downpart">
                    <p className="a">
                      <del>$40.00</del>
                    </p>
                    <b className="bold">$35.00</b>
                  </div>
                  <div className="span_container">
                    <span className="span1">Sold : 29 </span>
                    <span className="span2"> Available : 12</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="productgrid">
            <Link to="/cart">
              <div
                className="item2 item"
                onClick={() => {
                  setTitle("Brown Backpack");
                  setProductPrice(30);
                  setProductImage(
                    "https://res.cloudinary.com/chiedozie/image/upload/v1635757264/backpack_o5xzkr.png"
                  );
                }}
              >
                <img
                  className="image"
                  src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/backpack_o5xzkr.png"
                  alt=""
                />
                <div className="text">
                  <h5>Brown Backpack</h5>
                  <div className="downpart">
                    <p className="a">
                      <del>$35.00</del>
                    </p>
                    <b className="bold">$30.00</b>
                  </div>
                  <div className="span_container">
                    <span className="span1">Sold : 29 </span>
                    <span className="span2"> Available : 12</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/cart">
              <div
                className="item3 item"
                onClick={() => {
                  setTitle("Black Hat");
                  setProductPrice(15);
                  setProductImage(
                    "https://res.cloudinary.com/chiedozie/image/upload/v1635757264/hat_i70lnl.png"
                  );
                }}
              >
                <img
                  className="image"
                  src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/hat_i70lnl.png"
                  alt=""
                />
                <div className="text">
                  <h5>Black Hat</h5>
                  <div className="downpart">
                    <p className="a">
                      <del>$20.00</del>
                    </p>
                    <b className="bold">$15.00</b>
                  </div>
                  <div className="span_container">
                    <span className="span1">Sold : 29 </span>
                    <span className="span2"> Available : 12</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/cart">
              <div
                className="item4 item"
                onClick={() => {
                  setTitle("Brown Shoe");
                  setProductPrice(40);
                  setProductImage(
                    "https://res.cloudinary.com/chiedozie/image/upload/v1635757264/brownflatshoe_ci9qcz.jpg"
                  );
                }}
              >
                <img
                  className="image"
                  src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/brownflatshoe_ci9qcz.jpg"
                  alt=""
                />
                <div className="text">
                  <h5>Brown Shoe</h5>
                  <div className="downpart">
                    <p className="a">
                      <del>$45.00</del>
                    </p>
                    <b className="bold">$40.00</b>
                  </div>
                  <div className="span_container">
                    <span className="span1">Sold : 29 </span>
                    <span className="span2"> Available : 12</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/cart">
              <div
                className="item5 item"
                onClick={() => {
                  setTitle("Pink Sneakers");
                  setProductPrice(45);
                  setProductImage(
                    "https://res.cloudinary.com/chiedozie/image/upload/v1635757264/pinkshoe_mjliqo.png"
                  );
                }}
              >
                <img
                  className="image"
                  src="https://res.cloudinary.com/chiedozie/image/upload/v1635757264/pinkshoe_mjliqo.png"
                  alt=""
                />
                <div className="text">
                  <h5>Pink Sneakers</h5>
                  <div className="downpart">
                    <p className="a">
                      <del>$50.00</del>
                    </p>
                    <b className="bold">$45.00</b>
                  </div>
                  <div className="span_container">
                    <span className="span1">Sold : 29 </span>
                    <span className="span2"> Available : 12</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
