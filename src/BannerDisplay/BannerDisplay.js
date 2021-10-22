import React from "react";
import { Button } from "semantic-ui-react";
import "./BannerDisplay.css";

const BannerDisplay = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "790px",
      }}
    >
      <div className="bannerdisplayimage">
        <img
          src="https://res.cloudinary.com/ejooremmanuel/image/upload/v1634562194/shoe_gnt4by.jpg"
          alt=""
          style={{ width: "400px", height: "450px" }}
        />
      </div>
      <div style={{ marginLeft: "40px" }}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                provident ex dicta reprehenderit tempora corrupti quisquam fugit
                veritatis necessitatibus quos?
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <Button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                Shop Now
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BannerDisplay;
