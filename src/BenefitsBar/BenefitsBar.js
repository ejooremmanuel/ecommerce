import React from "react";
import { Segment } from "semantic-ui-react";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ContactlessIcon from "@material-ui/icons/Contactless";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import "./BenefitsBar.css";

const BenefitsBar = () => {
  return (
    <div className="benefitsContainer">
      <div className="Benefitscard1">
        <table>
          <tr>
            <Segment
              style={{
                display: "flex",
                alignItems: "center",
                width: "250px",
                justifyContent: "center",
              }}
            >
              <td>
                <AccountBalanceWalletIcon />
              </td>
              <td>
                <h6 style={{ marginBottom: "0px" }}>100% Money Back</h6>
              </td>
            </Segment>
          </tr>
        </table>
      </div>
      <div className="Benefitscard2">
        <table>
          <tr>
            <Segment
              style={{
                display: "flex",
                alignItems: "center",
                width: "250px",
                justifyContent: "center",
              }}
            >
              <td>
                <ContactlessIcon />
              </td>
              <td>
                <h6 style={{ marginBottom: "0px" }}>Non Contact Shipping</h6>
              </td>
            </Segment>
          </tr>
        </table>
      </div>
      <div className="Benefitscard3">
        <table>
          <tr>
            <Segment
              style={{
                display: "flex",
                alignItems: "center",
                width: "250px",
                justifyContent: "center",
              }}
            >
              <td>
                <LocalShippingIcon />
              </td>
              <td>
                <h6 style={{ marginBottom: "0px" }}>
                  Free Delivery Order over $200
                </h6>
              </td>
            </Segment>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BenefitsBar;
