import React, { Component } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Button from "@mui/material/Button";

export class Controls extends Component {
  render() {
    const btns = [
      {
        id: 1,
        title: "Reset",
        color: `${this.props.bg === true ? "secondary" : "warning"}`,
        click: this.props.reset,
      },
      { id: 2, title: `Empty`, color: "error", click: this.props.empty },
      { id: 3, title: "Original", color: "info", click: this.props.orignal },
    ];

    return (
      <div className="w-full flex justify-around">
        {btns.map((btn) => {
          return (
            <Button
              key={btn.id}
              variant="contained"
              color={btn.color}
              onClick={btn.click}
            >
              {btn.title}
            </Button>
          );
        })}
        {this.props.bg === true ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.mode}
          >
            <BsFillMoonFill />
          </Button>
        ) : (
          <Button variant="contained" color="warning" onClick={this.props.mode}>
            <BsFillSunFill />
          </Button>
        )}
      </div>
    );
  }
}

export default Controls;
