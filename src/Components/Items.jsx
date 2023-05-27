import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";

export class Items extends Component {
  render() {
    return (
      <div className="w-full justify-center flex flex-wrap">
        {this.props.products.length > 0 ? (
          this.props.products.map((item) => {
            return (
              <Paper
                key={item.id}
                className="flex w-[90%] justify-around my-2 items-center"
                sx={{
                  bgcolor: "#004d40",
                  color: "#ffff",
                  fontWeight: "bold",
                }}
              >
                <span>{item.name}</span>
                <span>{item.price}$</span>
                <span>{item.count}</span>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => this.props.increment(item.id)}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => this.props.decrement(item.id)}
                >
                  -
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => this.props.onDelete(item.id)}
                >
                  Del
                </Button>
                <span>Total: {item.price * item.count}$</span>
              </Paper>
            );
          })
        ) : (
          <Typography variant="h1" color="red">
            Empty
          </Typography>
        )}
        {this.props.products.length > 0 && (
          <Typography variant="h2" color="#01579b" sx={{ fontWeight: "bold" }}>
            Total Price:{" "}
            {this.props.products.reduce(
              (acc, item) => acc + item.price * item.count,
              0
            )}
            $
          </Typography>
        )}
      </div>
    );
  }
}

export default Items;
