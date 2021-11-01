import React from "react";
import "./Footerbar.css";

const Footerbar = () => {
  return (
    <div className="FooterContainer">
      <div className="subContainer">
        <div className="footer__text">
          <div className="footer__text__second">
            <h4>BuySell</h4>
            <br />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellat, ipsa!
            </span>
            <br />
            <div className="footer__icons">
              <i class="facebook f icon"></i>
              <i class="twitter icon"></i>
              <i class="linkedin icon"></i>
              <i class="skype icon"></i>
            </div>
          </div>
          <div className="footer__text__second resources">
            <h4>Resources</h4>
            <span>Manage Account</span>
            <span>Social Media Marketing</span>
            <span>Social Reports</span>
            <span>Brand Improvement</span>
          </div>
          <div className="footer__text__second">
            <table>
              <tr>
                <td>
                  <h6>Got Questions? Call Now</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>+12132332</h4>
                </td>
              </tr>
            </table>
            <br />
            <span>Suite 106, Jabi, MKK Plaza</span>
            <button className="footer__button mt-2">Find Us</button>
          </div>
        </div>
        <div>
          <hr className="footerRule" />
          <div className="footerMenu">
            <div className="footer__credit">
              <span>Design and Copyright &copy; 2021 Buy Sell </span>
            </div>

            <div className="footer__submenu">
              <span>Home</span>
              <span>Clients</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerbar;
