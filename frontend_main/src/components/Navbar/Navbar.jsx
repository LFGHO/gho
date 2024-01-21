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
import navlogo from "../../assets/Logo/gfo_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ConnectWallet, useAddress, useShowConnectEmbed } from "@thirdweb-dev/react";
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
  const address = useAddress();
  const fisrtThreeLetters = address ? address.slice(0, 3) : "";
  const lastThreeLetters = address ? address.slice(-3) : "";
  const trimedAddress = fisrtThreeLetters + "..." + lastThreeLetters;


  function navigateToSignup() {
    setIsDrawerOpen(false);
    navigate("/", { replace: true });
  }

  const loginOptional = false;
  const showConnectEmbed = useShowConnectEmbed(loginOptional);
  
  if (showConnectEmbed) {
    navigate("/", { replace: true });
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
            <Link to="/dashboard">
              <img src={navlogo} className="h-20 pl-4"></img>
            </Link>
          </Typography>

          {/* Navigation for laptop */}
          <Stack direction="row" spacing={0.5} className="">
            <Link to="/portfolio" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Portfolio{" "}
              </Button>
            </Link>

            <Link to="/credit-option" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Credit Delegation{" "}
              </Button>
            </Link>

            <Link to="/notifications" className="flex">
              <Button
                color="inherit"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                Notifications
              </Button>
            </Link>

            <Button
              color="inherit"
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              <NormalButton
                navigate="/vault-options"
                text="Vaults"
              ></NormalButton>
            </Button>

            <div
              color="inherit"
              className="lg:flex items-center hidden"
            >
              
              <ConnectWallet
                detailsBtn={() => {
                  return (
                    <ButtonGradient >{trimedAddress}</ButtonGradient>
                  );
                }}
              />
            </div>

            

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
              <Link to="/portfolio">
                <Button color="inherit" onClick={closeDrawer}>
                  Portfolio{" "}
                </Button>
              </Link>

              <Link to="/credit-option">
                <Button color="inherit" onClick={closeDrawer}>
                  Credit Delegation{" "}
                </Button>
              </Link>

              <Link to="/notifications">
                <Button color="inherit" onClick={closeDrawer}>
                  Notifications
                </Button>
              </Link>

              <Button color="inherit" onClick={closeDrawer}>
                <NormalButton
                  navigate="/vault-options"
                  text="Vaults"
                ></NormalButton>
              </Button>

              {/* <div
                className="px-20 text-base w-full my-2"
                onClick={navigateToSignup}
              >
                <ButtonGradient text="Connect wallet"></ButtonGradient>
              </div> */}

              <Button color="inherit">
              <ConnectWallet
                detailsBtn={() => {
                  return (
                    <ButtonGradient >{trimedAddress}</ButtonGradient>
                  );
                }}
              />
              </Button>
              
            </Stack>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
