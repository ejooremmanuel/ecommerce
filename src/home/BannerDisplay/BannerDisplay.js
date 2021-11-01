import React from "react";
import { Button } from "semantic-ui-react";
import "./BannerDisplay.css";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BannerDisplay = () => {
  return (
    <Container>
      <div className="bannerdisplayimage">
        <div className="bannerdisplay-image">
          <img
            src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634562194/shoe_gnt4by.jpg"
            alt=""
            className="w-100"
          />
        </div>
        <div className=" bannerText ml-3">
          <table>
            <tr>
              <td>
                <h1
                  style={{
                    fontStyle: "italic",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  GET ALL ORIGINAL PRODUCTS
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore provident ex dicta reprehenderit tempora corrupti
                  quisquam fugit veritatis necessitatibus quos?
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/shop">
                  <Button className="red mt-3">Shop Now</Button>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default BannerDisplay;
