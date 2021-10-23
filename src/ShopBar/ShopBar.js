import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./ShopBar.css";

const ShopBar = () => {
  return (
    <div className="shopbarContainer">
      <div className="shopbarImage1">
        <table>
          <tr>
            <td>
              <h5>Feel Better</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="shopperheader">Best Shoes</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h5
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                GO SHOP <ArrowRightAltIcon />
              </h5>
            </td>
          </tr>
        </table>
      </div>
      <div className="shopbarImage2">
        <table>
          <tr>
            <td>
              <h5>Feel Better</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="shopperheader1">Girl jacket</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h5
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                GO SHOP <ArrowRightAltIcon />
              </h5>
            </td>
          </tr>
        </table>
      </div>
      <div className="shopbarImage3">
        <table>
          <tr>
            <td>
              <h5>Feel Better</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="shopperheader3">Stylish Bag</h1>
            </td>
          </tr>
          <tr>
            <td>
              <h5
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                GO SHOP <ArrowRightAltIcon />
              </h5>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ShopBar;
