import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";

function GenMenu(props) {
  // use State for Dropdown handling
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    props.func();
  };

  return (
    <React.Fragment>
      <Button
        color="inherit"
        id="menuOpenButton"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        sx={props.sx}
      >
        {props.title}
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "menuOpenButton",
        }}
      >
        {props.list.map((ele) => (
          <Link to={ele.href}>
            <MenuItem onClick={handleClose}>{ele.option}</MenuItem>
          </Link>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default GenMenu;
