import React from "react";
import { Container, Input, Button } from "semantic-ui-react";
import "./Subscribe.css";

const Subcribe = () => {
  return (
    <Container>
      <div className="subscribe-container">
        <div className="subscribe-text">
          <h3>Newsletter and get updates</h3>
          <h6>Sign up for our newsletter</h6>
        </div>
        <div className="subscribe-search ">
          <Input type="text" placeholder="Subscribe..." action>
            <input className="w-75" />
            <Button color="red" type="submit">
              Subscribe
            </Button>
          </Input>
        </div>
      </div>
    </Container>
  );
};

export default Subcribe;
