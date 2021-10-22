import React from 'react';
import { render } from "react-dom";
import Me from '../img/sneakers.png';
import Me2 from '../img/Handbag.png';
import Mee from '../img/sweather.png';
import Me3 from '../img/bag.png';


import './Weekly.css'


const Weekly = () => {
    return (
        <div>
           <h3 className ="weekly">Weekly Best Deals</h3>
           <div className="container">

               <div className="shop-1">
                  <div className="img__container">
                  <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/female_1_eg7kez.png" alt="shoe pic" className="intro__img"/>   
                  </div>
               <h5 className="Productname2">Product Name</h5>
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

            <div className="shop-1">
            <div className="img__container">
            <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/sweatshirt_pycpbg.png" alt="schoolbag pic" className="intro__img"/>
            </div>
            <h5 className="Productname2">Product Name</h5>
            <div className = "downpart">
            <div  className="firstprice">$20.00</div> 
            <div className="cancelledprice">$15.00</div>
            </div>
            <div className = "lastpart">
            <h5 className="sold">Sold:29</h5> 
            <h5 className="available">Available:12</h5>
            </div>
            </div>

            <div className="shop-1">
            <div className="img__container">
            <img src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634547848/schoolbag_zhytkd.png" alt="shoe PIc" className="intro__img"/>
            </div>
            <h5 className="Productname2">Product Name</h5>
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

            <div className="shop-1">
            <div className="img__container">
            <img src={Me} alt="pinksneakers" className="intro__img"/>
            </div>
            <h5 className="Productname2">Product Name</h5>
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
            
            <div className="shop-1">
            <div className="img__container">
            <img src={Me2} alt="shoe PIc" className="intro__img"/>
            </div>
            <h5 className="Productname2">Product Name</h5>
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

            <div className="shop-1">
            <div className="img__container">
            <img src={Mee} alt="shoe PIc" className="intro__img"/>
            </div>
            <h5 className="Productname2">Product Name</h5>
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
        </div>
        
        <div className="containers">
           <div> <img src={Me3} alt="promobag" className="promo__img"/> </div>
                <div className="other__right">
                   <p>30 % OFF<br/><strong>20th January - 1st April</strong></p></div>
             </div>
        </div>

        
    )
}

export default Weekly; 

