import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "./index.css";
class App extends Component {
  state = {
    data: [
      { id: 0, name: "Chipsy", count: 1, price: 8 },
      { id: 1, name: "Pepsi", count: 1, price: 5 },
      { id: 2, name: "Molto", count: 1, price: 3 },
      { id: 3, name: "Kranchy", count: 1, price: 10 },
      { id: 4, name: "Cigarates", count: 1, price: 30 },
    ],
    bg: true,
    products: [
      { id: 0, name: "Chipsy", count: 1, price: 8 },
      { id: 1, name: "Pepsi", count: 1, price: 5 },
      { id: 2, name: "Molto", count: 1, price: 3 },
      { id: 3, name: "Kranchy", count: 1, price: 10 },
      { id: 4, name: "Cigarates", count: 1, price: 30 },
    ],
  };
  darkMode = () => {
    let bg = this.state.bg;
    this.setState({ bg: !bg }, () => {
      if (this.state.bg) {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "black";
      }
    });
  };
  increment = (id) => {
    let products = this.state.products;
    products = products.map((product) => {
      if (id === product.id) {
        return {
          ...product,
          count: product.count + 1,
        };
      }
      return product;
    });
    this.setState({ products });
  };
  decrement = (id) => {
    let products = this.state.products;
    products = products.map((product) => {
      if (id === product.id) {
        if (product.count > 0) {
          return {
            ...product,
            count: product.count - 1,
          };
        }
      }
      return product;
    });
    this.setState({ products });
  };
  onDelete = (id) => {
    let products = this.state.products;
    products = products.filter((product) => {
      return product.id !== id;
    });
    this.setState({ products });
  };
  addProduct = (id) => {
    const { data, products } = this.state;
    const productToAdd = data.find((product) => product.id === id);

    if (productToAdd) {
      const productIndex = products.findIndex((product) => product.id === id);

      if (productIndex !== -1) {
        // Product already exists, increase count
        const updatedProducts = [...products];
        updatedProducts[productIndex].count += 1;
        this.setState({ products: updatedProducts });
      } else {
        // Add new product to the array
        const newProducts = [...products, productToAdd];
        this.setState({ products: newProducts });
      }
    }
  };
  empty = () => {
    let products = this.state.products;
    products = [];
    this.setState({ products });
  };
  orignal = () => {
    let products = this.state.products;
    products = [
      { id: 0, name: "Chipsy", count: 1, price: 8 },
      { id: 1, name: "Pepsi", count: 1, price: 5 },
      { id: 2, name: "Molto", count: 1, price: 3 },
      { id: 3, name: "Kranchy", count: 1, price: 10 },
      { id: 4, name: "Cigarates", count: 1, price: 30 },
    ];
    document.body.style.backgroundColor = "white";
    this.setState({ products, bg: true });
  };
  reset = () => {
    let products = this.state.products;
    products = products.map((product) => {
      return {
        ...product,
        count: 0,
      };
    });
    this.setState({ products });
  };
  render() {
    return (
      <div>
        <NavBar
          data={this.state.data}
          products={this.state.products}
          addProduct={this.addProduct}
        />
        <Home
          bg={this.state.bg}
          mode={this.darkMode}
          products={this.state.products}
          increment={this.increment}
          decrement={this.decrement}
          onDelete={this.onDelete}
          empty={this.empty}
          orignal={this.orignal}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
