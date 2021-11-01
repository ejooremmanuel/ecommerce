import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./ShopBar.css";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
const ShopBar = () => {
  return (
    <Container>
      <div className="shopbarContainer">
        <div className="shopbarImage1">
          <table>
            <tbody>
              <thead>
                <h5>Feel Better</h5>
              </thead>
            </tbody>
            <tbody>
              <thead>
                <h1 className="shopperheader">Best Shoes</h1>
              </thead>
            </tbody>
            <tbody>
              <Link to="/shop">
                <thead>
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    GO SHOP <ArrowRightAltIcon />
                  </h5>
                </thead>
              </Link>
            </tbody>
          </table>
        </div>
        <div className="shopbarImage2">
          <table>
            <tbody>
              <thead>
                <h5>Feel Better</h5>
              </thead>
            </tbody>
            <tr>
              <td>
                <h1 className="shopperheader1">Girl jacket</h1>
              </td>
            </tr>
            <tbody>
              <Link to="/shop">
                <thead>
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    GO SHOP <ArrowRightAltIcon />
                  </h5>
                </thead>
              </Link>
            </tbody>
          </table>
        </div>
        <div className="shopbarImage3">
          <table>
            <tbody>
              <thead>
                <h5>Feel Better</h5>
              </thead>
            </tbody>
            <tbody>
              <thead>
                <h1 className="shopperheader3">Stylish Bag</h1>
              </thead>
            </tbody>
            <tbody>
              <Link to="/shop">
                <thead>
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    GO SHOP <ArrowRightAltIcon />
                  </h5>
                </thead>
              </Link>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ShopBar;
