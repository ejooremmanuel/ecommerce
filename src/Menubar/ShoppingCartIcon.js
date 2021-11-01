import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../context/CartContext";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CustomizedBadges() {
  const { CartNo } = useContext(CartContext);
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={CartNo} color="secondary">
        <ShoppingCartIcon style={{ color: "white" }} />
      </StyledBadge>
    </IconButton>
  );
}
