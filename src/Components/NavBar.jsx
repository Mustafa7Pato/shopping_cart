import React, { Component } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { BsCartPlusFill } from "react-icons/bs";
class NavBar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#212121" }}>
          <Toolbar className="container flex justify-between">
            <div className="flex">
              <Typography variant="h6" component="div">
                Cart-Shopping
              </Typography>
            </div>
            <div className="flex">
              {this.props.data.map((item) => {
                return (
                  <Button
                    key={item.id}
                    variant="contained"
                    color="success"
                    sx={{ mr: "5px" }}
                    onClick={() => this.props.addProduct(item.id)}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </div>
            <IconButton className="relative">
              <BsCartPlusFill className="text-slate-200" />
              <span
                className={`absolute top-0 right-0 rounded-full w-4 h-4 flex items-center justify-center text-xs ${
                  this.props.products.length > 0
                    ? "bg-orange-300 text-black"
                    : "bg-red-500 text-white"
                }`}
              >
                {this.props.products.length}
              </span>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NavBar;
