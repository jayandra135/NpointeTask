import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

import profile from "../assests/profileImg.jpg";

const drawerWidth = 240;

const SearchBar = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor: "#ff424f" }}
        className="d-flex flex-row p-1 appBar"
      >
        <Toolbar className="searchToolbar">
          <Link variant="h6" noWrap component="div" to="/" className="">
            Adze.DESIGN
          </Link>
        </Toolbar>
        <div className="searchNavBar displayNone">
          <Paper
            component="form"
            className="inputSearch"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
              height: 50,
            }}
            style={{ backgroundColor: "#ff424f" }}
          >
            <IconButton
              type="button"
              sx={{ p: "10px", color: "white" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search movies"
              inputProps={{ "aria-label": "search movies" }}
            />
          </Paper>
          <div className="searchNavProfile">
            <img src={profile} alt="" />
          </div>
        </div>
      </AppBar>

      <Drawer
        variant="permanent"
        className="displayNone"
        sx={{
          width: drawerWidth,
          height: "auto",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            backgroundColor: "black",
            color: "white",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", color: "white" }}>
          <List className="listbar">
            {[
              "New Releases",
              "Trending",
              "Coming Soon",
              "Favourites",
              "Watch Later",
            ].map((text, index) => (
              <ListItem key={text} disablePadding className="searchlistItem">
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider style={{ backgroundColor: "white" }} />
          <div className="lastActivity">
            <h5>Last Activity</h5>
            <div className="activityDiv">
              <img src={profile} alt="" />
              <div className="activityName">
                <h6>
                  Jonahan Marvey <span>wants to be your friend</span>
                </h6>
                <p>32 minutes ago</p>
              </div>
            </div>
            <div className="activityDiv">
              <img src={profile} alt="" />
              <div className="activityName">
                <h6>
                  Jonahan Marvey <span>wants to be your friend</span>
                </h6>
                <p>32 minutes ago</p>
              </div>
            </div>
            <div className="activityDiv">
              <img src={profile} alt="" />
              <div className="activityName">
                <h6>
                  Jonahan Marvey <span>wants to be your friend</span>
                </h6>
                <p>32 minutes ago</p>
              </div>
            </div>
          </div>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        style={{ backgroundColor: "#222b31" }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default SearchBar;
