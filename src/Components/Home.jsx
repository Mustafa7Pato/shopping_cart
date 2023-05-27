import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Controls from "./UI/Controls";
import Items from "./Items";

class Home extends Component {
  render() {
    return (
      <div className="flex items-center flex-col ">
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "green" }}>
          Shopping_Cart
        </Typography>
        <div className="flex my-12 w-full">
          <Controls
            bg={this.props.bg}
            mode={this.props.mode}
            empty={this.props.empty}
            orignal={this.props.orignal}
            reset={this.props.reset}
          />
        </div>
        <Items
          products={this.props.products}
          increment={this.props.increment}
          decrement={this.props.decrement}
          onDelete={this.props.onDelete}
        />
      </div>
    );
  }
}

export default Home;
