import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { NavRoute } from "./NavRoute";
import { Link, useNavigate } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import profile from "../assests/profileImg.jpg";
import { AiOutlineWifi } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  height: "auto",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",

  backgroundColor: "#181818 ",
  color: "white",
  borderRight: "1px solid #060606",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  height: "auto",
  backgroundColor: "#181818 ",
  color: "white",
  borderRight: "1px solid #060606",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,

    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",

  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const Sidebar = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onFocusHandler = () => {
    navigate("/search");
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar style={{ backgroundColor: "#060606", color: "white" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={handleDrawerClose}
              style={
                open
                  ? {
                      display: "block",
                      border: "2px solid #181818",
                      borderRadius: "10px",
                      padding: "2px 8px",
                    }
                  : { display: "none" }
              }
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ color: "white" }} />
              ) : (
                <ChevronLeftIcon style={{ color: "white" }} />
              )}
            </IconButton>
            <div className="navbartop">
              <Paper
                className="headerSearch"
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                }}
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  style={{ color: "white" }}
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search everything"
                  inputProps={{ "aria-label": "search google maps" }}
                  style={{ color: "white" }}
                  onFocus={onFocusHandler}
                />
              </Paper>
              <Link to="#" className="displayNone">
                <BsBell style={{ color: "white", fontSize: "20px" }} />
              </Link>
              <Link className="profileImg displayNone" to="#">
                <img src={profile} alt="" />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            style={{
              backgroundColor: "#060606",
              color: "white",
            }}
          >
            <div className="drawerHeader">
              <p>N</p>
              <h4>
                Adze.<span style={{ color: "red" }}>DESIGN</span>
              </h4>
            </div>
          </DrawerHeader>
          <Divider />
          <div className="leftDrawer">
            <p
              style={
                open
                  ? {
                      display: "block",
                    }
                  : { display: "none" }
              }
            >
              News Feed
            </p>
            {NavRoute.map((ele, index) => (
              <List key={index} className="listDiv">
                <ListItem
                  disablePadding
                  sx={{ display: "block" }}
                  className={ele.label === "Browse" ? "active" : "listItem"}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                      style={{ color: "white" }}
                    >
                      {ele.icons}
                    </ListItemIcon>
                    <ListItemText
                      primary={ele.label}
                      sx={{ opacity: open ? 1 : 0 }}
                      className="listLabel"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            ))}
          </div>
          <Divider />
          <div
            className="followDrawer"
            style={
              open
                ? {
                    display: "block",
                  }
                : { display: "none" }
            }
          >
            <p>Following</p>

            <div className="followProfile">
              <img src={profile} alt="" />
              <div>
                <p>ikakot</p>
                <p>
                  <AiOutlineWifi />
                </p>
              </div>
            </div>
            <div className="followProfile">
              <img src={profile} alt="" />
              <div>
                <p>ikakot</p>
                <p>
                  <GoDotFill style={{ color: "green" }} />
                </p>
              </div>
            </div>
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
