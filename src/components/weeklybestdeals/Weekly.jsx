<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext } from "react";
import Me from "../img/sneakers.png";
import Me2 from "../img/Handbag.png";
import Mee from "../img/sweather.png";
import Me3 from "../img/bag.png";
import "./Weekly.css";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { CartContext } from "../../context/CartContext";
const Weekly = () => {
  const { setTitle, setProductImage, setProductPrice } =
    useContext(CartContext);
  return (
    <Container>
      <div>
        <h3 className="weekly">Weekly Best Deals</h3>
        <div className="container">
          <Link to="/cart">
            <div
              className="shop-1"
              onClick={() => {
                setTitle("Ladies Shoes");
                setProductPrice(20);
                setProductImage(
                  "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/female_1_eg7kez.png"
                );
              }}
            >
              <div className="img__container">
                <img
                  src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/female_1_eg7kez.png"
                  alt="shoe pic"
                  className="intro__img"
                />
              </div>
              <h5 className="Productname2">Ladies Shoes</h5>
              <div className="downpart">
                <div className="firstprice">$20.00</div>
                <div className="cancelledprice">$15.00</div>
              </div>
              <div className="lastpart">
                <h5 className="sold">Sold:29</h5>
                <h5 className="available">Available:12</h5>
              </div>
              {/* <div className="circle">
                  <p>10% <br/><strong>Off</strong></p>
                </div> */}
            </div>
          </Link>

          <Link to="/cart">
            <div
              className="shop-1"
              onClick={() => {
                setTitle("Sweat Shirt");
                setProductPrice(20);
                setProductImage(
                  "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/sweatshirt_pycpbg.png"
                );
              }}
            >
              <div className="img__container">
                <img
                  src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/sweatshirt_pycpbg.png"
                  alt="schoolbag pic"
                  className="intro__img"
                />
              </div>
              <h5 className="Productname2">Sweat Shirt</h5>
              <div className="downpart">
                <div className="firstprice">$20.00</div>
                <div className="cancelledprice">$15.00</div>
              </div>
              <div className="lastpart">
                <h5 className="sold">Sold:29</h5>
                <h5 className="available">Available:12</h5>
              </div>
            </div>
          </Link>

          <Link to="/cart">
            <div
              className="shop-1"
              onClick={() => {
                setTitle("School Bag");
                setProductPrice(20);
                setProductImage(
                  "https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/schoolbag_zhytkd.png"
                );
              }}
            >
              <div className="img__container">
                <img
                  src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/schoolbag_zhytkd.png"
                  alt="shoe PIc"
                  className="intro__img"
                />
              </div>
              <h5 className="Productname2">School Bag</h5>
              <div className="downpart">
                <div className="firstprice">$20.00</div>
                <div className="cancelledprice">$15.00</div>
              </div>
              <div className="lastpart">
                <h5 className="sold">Sold:29</h5>
                <h5 className="available">Available:12</h5>
              </div>
              {/* <div className="circle">
                <p>20% <br/><strong>Off</strong></p>
           </div> */}
            </div>
          </Link>

          <Link to="/cart">
            <div
              className="shop-1"
              onClick={() => {
                setTitle("Product Name");
                setProductPrice(20);
                setProductImage({ Me });
              }}
            >
              <div className="img__container">
                <img src={Me} alt="pinksneakers" className="intro__img" />
              </div>
              <h5 className="Productname2">Product Name</h5>
              <div className="downpart">
                <div className="firstprice">$20.00</div>
                <div className="cancelledprice">$15.00</div>
              </div>
              <div className="lastpart">
                <h5 className="sold">Sold:29</h5>
                <h5 className="available">Available:12</h5>
              </div>
              {/* <div className="circle">
              <p>10% <br/><strong>Off</strong></p>
           </div> */}
            </div>
          </Link>

          <Link to="/cart">
            <div
              className="shop-1"
              onClick={() => {
                setTitle("Product Name");
                setProductPrice(20);
                setProductImage({ Me2 });
              }}
            >
              <div className="img__container">
                <img src={Me2} alt="shoe PIc" className="intro__img" />
              </div>
              <h5 className="Productname2">Product Name</h5>
              <div className="downpart">
                <div className="firstprice">$20.00</div>
                <div className="cancelledprice">$15.00</div>
              </div>
              <div className="lastpart">
                <h5 className="sold">Sold:29</h5>
                <h5 className="available">Available:12</h5>
              </div>
              {/* <div className="circle">
              <p>10% <br/><strong>Off</strong></p>
           </div> */}
            </div>
          </Link>

          <Link to="/cart">
            <div
              className="shop-1"
              onClick={() => {
                setTitle("Product Name");
                setProductPrice(20);
                setProductImage({ Mee });
              }}
            >
              <div className="img__container">
                <img src={Mee} alt="shoe PIc" className="intro__img" />
              </div>
              <h5 className="Productname2">Product Name</h5>
              <div className="downpart">
                <div className="firstprice">$20.00</div>
                <div className="cancelledprice">$15.00</div>
              </div>
              <div className="lastpart">
                <h5 className="sold">Sold:29</h5>
                <h5 className="available">Available:12</h5>
              </div>
              {/* <div className="circle">
               <p>10% <br/><strong>Off</strong></p>
            </div> */}
            </div>
          </Link>
        </div>

        <div className="containers">
          <div>
            <img src={Me3} alt="promobag" className="promo__img" />{" "}
          </div>
          <div className="other__right">
            <p>
              30 % OFF
              <br />
              <strong>20th January - 1st April</strong>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
=======
import React,{useContext} from 'react';
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Weekly.css'


const Weekly = () => {
   const {setTitle, setProductImage, setProductPrice } = useContext (CartContext)
    return (
       <Container>
        <div>
           <h3 className ="weekly">Weekly Best Deals</h3>
           <div className="container">

              <Link to="/cart">
              <div className="shop-1" onClick={()=>{
                 setTitle("Ladies Shoes")
                 setProductPrice(15)
                 setProductImage("https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/female_1_eg7kez.png");
              }}>
                  <div className="img__container">
                  <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/female_1_eg7kez.png" alt="shoe pic" className="intro__img"/>   
                  </div>
               <h5 className="Productname2">Ladies Shoe</h5>
               <div className = "downpart">
               <div className="firstprice">$20.00</div> 
               <div className="cancelledprice">$15.00</div>
               </div>
               <div className = "lastpart">
               <h5 className="sold">Sold:29</h5> 
               <h5 className="available">Available:12</h5>
               </div>
               {/* <div className="circle">
                  <p>10% <br/><strong>Off</strong></p>
                </div> */}
               </div>

                 </Link>

            <Link to= "/cart">
            <div className="shop-1" onClick ={()=>{
               setTitle("Sweather")
               setProductPrice(40)
               setProductImage("https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/sweatshirt_pycpbg.png")
            }}>
            <div className="img__container">
            <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/sweatshirt_pycpbg.png" alt="schoolbag pic" className="intro__img"/>
            </div>
            <h5 className="Productname2">Sweather</h5>
            <div className = "downpart">
            <div  className="firstprice">$60.00</div> 
            <div className="cancelledprice">$40.00</div>
            </div>
            <div className = "lastpart">
            <h5 className="sold">Sold:29</h5> 
            <h5 className="available">Available:12</h5>
            </div>
            </div>
            </Link>

=======
import React,{useContext} from 'react';
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Weekly.css'


const Weekly = () => {
   const {setTitle, setProductImage, setProductPrice } = useContext (CartContext)
    return (
       <Container>
        <div>
           <h3 className ="weekly">Weekly Best Deals</h3>
           <div className="container">

              <Link to="/cart">
              <div className="shop-1" onClick={()=>{
                 setTitle("Ladies Shoes")
                 setProductPrice(15)
                 setProductImage("https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/female_1_eg7kez.png");
              }}>
                  <div className="img__container">
                  <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/female_1_eg7kez.png" alt="shoe pic" className="intro__img"/>   
                  </div>
               <h5 className="Productname2">Ladies Shoe</h5>
               <div className = "downpart">
               <div className="firstprice">$20.00</div> 
               <div className="cancelledprice">$15.00</div>
               </div>
               <div className = "lastpart">
               <h5 className="sold">Sold:29</h5> 
               <h5 className="available">Available:12</h5>
               </div>
               {/* <div className="circle">
                  <p>10% <br/><strong>Off</strong></p>
                </div> */}
               </div>

                 </Link>

            <Link to= "/cart">
            <div className="shop-1" onClick ={()=>{
               setTitle("Sweather")
               setProductPrice(40)
               setProductImage("https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/sweatshirt_pycpbg.png")
            }}>
            <div className="img__container">
            <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/sweatshirt_pycpbg.png" alt="schoolbag pic" className="intro__img"/>
            </div>
            <h5 className="Productname2">Sweather</h5>
            <div className = "downpart">
            <div  className="firstprice">$60.00</div> 
            <div className="cancelledprice">$40.00</div>
            </div>
            <div className = "lastpart">
            <h5 className="sold">Sold:29</h5> 
            <h5 className="available">Available:12</h5>
            </div>
            </div>
            </Link>

>>>>>>> 92a02d84196edcfac20e82e5c8fa3e7b0f7213fd
            <Link to ="/cart"> 
            <div className="shop-1" onClick= {()=>{
               setTitle("White schoolbag")
               setProductPrice(25)
               setProductImage("https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/schoolbag_zhytkd.png");
            }}>
            <div className="img__container">
            <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/schoolbag_zhytkd.png" alt="shoe PIc" className="intro__img"/>
            </div>
            <h5 className="Productname2">White School bag</h5>
            <div className = "downpart">
            <div className="firstprice">$20.00</div> 
            <div className="cancelledprice">$15.00</div>
            </div>
            <div className = "lastpart">
            <h5 className="sold">Sold:29</h5> 
            <h5 className="available">Available:12</h5>
            </div>
            {/* <div className="circle">
                <p>20% <br/><strong>Off</strong></p>
           </div> */}
            </div>
            </Link>

            <Link to ="/cart">
            <div className="shop-1" onClick ={()=>{
               setTitle("Pink Sneakers")
               setProductPrice(25)
               setProductImage("https://res.cloudinary.com/tdic/image/upload/v1635765701/sneakers-removebg-preview_c0mmea.png")
            }}>
            <div className="img__container">
            <img src="https://res.cloudinary.com/tdic/image/upload/v1635765701/sneakers-removebg-preview_c0mmea.png"alt="pinksneakers" className="intro__img"/>
            </div>
            <h5 className="Productname2">Pink Sneakers</h5>
            <div className = "downpart">
            <div className="firstprice">$20.00</div> 
            <div className="cancelledprice">$15.00</div>
            </div>
            <div className = "lastpart">
            <h5 className="sold">Sold:29</h5> 
            <h5 className="available">Available:12</h5>
            </div>
            {/* <div className="circle">
              <p>10% <br/><strong>Off</strong></p>
           </div> */}
            </div>
            </Link>

            <Link to = "/cart">
            <div className="shop-1" onClick={()=>{
               setTitle("Portable Handbag")
               setProductPrice(15)
               setProductImage("https://res.cloudinary.com/tdic/image/upload/v1635765784/Handbag-removebg-preview_t866rs.png")
            }}>
            <div className="img__container">
            <img src="https://res.cloudinary.com/tdic/image/upload/v1635765784/Handbag-removebg-preview_t866rs.png" alt="shoe PIc" className="intro__img"/>
            </div>
            <h5 className="Productname2">Portable handbag</h5>
            <div className = "downpart">
            <div className="firstprice">$20.00</div> 
            <div className="cancelledprice">$15.00</div>
            </div>
            <div className = "lastpart">
            <h5 className="sold">Sold:29</h5> 
            <h5 className="available">Available:12</h5>
            </div>
            {/* <div className="circle">
              <p>10% <br/><strong>Off</strong></p>
           </div> */}
            </div>
            </Link>

            <Link to ="/cart">
            <div className="shop-1" onClick = {()=>{
              setTitle("Pink Sweather")
              setProductPrice(15)  
              setProductImage("https://res.cloudinary.com/tdic/image/upload/v1635765832/sweather-removebg-preview_az1iop.png")
            }}>
            <div className="img__container">
            <img src="https://res.cloudinary.com/tdic/image/upload/v1635765832/sweather-removebg-preview_az1iop.png" alt="shoe PIc" className="intro__img"/>
            </div>
            <h5 className="Productname2">Pink Sweather</h5>
            <div className = "downpart">
            <div className="firstprice">$20.00</div> 
            <div className="cancelledprice">$15.00</div>
            </div>
            <div className = "lastpart">
            <h5 className="sold">Sold:29</h5> 
            <h5 className="available">Available:12</h5>
            </div>
            {/* <div className="circle">
               <p>10% <br/><strong>Off</strong></p>
            </div> */}
            </div> 
            </Link>
        </div>
        
        <div className="containers">
           <div> <img src="https://res.cloudinary.com/tdic/image/upload/v1635766146/bag_paocgp.png" alt="promobag" className="promo__img"/> </div>
                <div className="other__right">
                   <p>30 % OFF<br/><strong>20th January - 1st April</strong></p></div>
             </div>
        </div>
        </Container>  
    )
}

export default Weekly; 
<<<<<<< HEAD
>>>>>>> 92a02d84196edcfac20e82e5c8fa3e7b0f7213fd
=======
>>>>>>> 92a02d84196edcfac20e82e5c8fa3e7b0f7213fd

