import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import navlogo from "../../assets/Logo/disney.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { color } from "../../theme";
import ButtonGradient from "../ButtonGradient";
import NormalButton from "../Button";

function Navbar() {
  // use state for Drawer opening & closing
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  const navigate = useNavigate();
  function navigateToSignup() {
    setIsDrawerOpen(false);
    navigate("/auth/signup");
  }

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar
          className=""
          style={{ backgroundColor: color.background, color: color.text }}
        >
          {/* Adding Company name or logo here  */}
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <img src={navlogo} className="h-20 pl-4"></img>
          </Typography>

          {/* Navigation for laptop */}
          <Stack direction="row" spacing={0.5} className="">
            <NavLink to="/" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Home{" "}
              </Button>
            </NavLink>

            <Link to="/coming-soon" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                About{" "}
              </Button>
            </Link>

            <Link to="/coming-soon" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                News{" "}
              </Button>
            </Link>

            <Link to="/coming-soon" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Testimonials{" "}
              </Button>
            </Link>

            <Link to="/coming-soon" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                FAQ{" "}
              </Button>
            </Link>

            <Link to="/coming-soon" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Contact
              </Button>
            </Link>

            <Button
              color="inherit"
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              <NormalButton text="Cross-chain payments"></NormalButton>
            </Button>

            <Button
              color="inherit"
              sx={{ display: { xs: "none", lg: "block" } }}
              onClick={navigateToSignup}
            >
              <ButtonGradient text="Connect Wallet"></ButtonGradient>
            </Button>

            {/* Hamburger Icon  */}
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>

          {/* Drawer Navigations are here  */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              height: "100vh",
            }}
            // style={{backgroundColor: color.background}}
          >
            <Stack
              width="250px"
              role="presentation"
              spacing={0}
              style={{
                backgroundColor: color.background,
                height: "100vh",
                color: color.text,
                fontSize: "32px",
                // border: `2px solid ${color.primary}`
              }}
              className="flex flex-col justify-center items-center"
            >
              <Link to="/">
                <Button color="inherit" onClick={closeDrawer}>
                  Home{" "}
                </Button>
              </Link>

              <Link to="/coming-soon">
                <Button color="inherit" onClick={closeDrawer}>
                  About{" "}
                </Button>
              </Link>

              <Link to="/coming-soon">
                <Button color="inherit" onClick={closeDrawer}>
                  News{" "}
                </Button>
              </Link>

              <Link to="/coming-soon">
                <Button color="inherit" onClick={closeDrawer}>
                  Testimonials{" "}
                </Button>
              </Link>

              <Link to="/coming-soon">
                <Button color="inherit" onClick={closeDrawer}>
                  FAQ{" "}
                </Button>
              </Link>

              <Link to="/coming-soon">
                <Button color="inherit" onClick={closeDrawer}>
                  Contact{" "}
                </Button>
              </Link>

              <Button color="inherit" onClick={closeDrawer}>
                <NormalButton text="Cross-chain Payment"></NormalButton>
              </Button>

              {/* <div
                className="px-20 text-base w-full my-2"
                onClick={navigateToSignup}
              >
                <ButtonGradient text="Connect wallet"></ButtonGradient>
              </div> */}

              <Button color="inherit" onClick={closeDrawer}>
                <ButtonGradient text="Connect wallet"></ButtonGradient>
              </Button>
            </Stack>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
