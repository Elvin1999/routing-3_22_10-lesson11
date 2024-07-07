import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const url =
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=foods&health%5B0%5D=alcohol-free";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c531844a9cmsh64ac112e538c4b9p155f3djsn5493438b0828",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    try {
      fetch(url, options)
        .then((r) => r.json())
        .then((d) => {
          this.setState({
            products: d.hints,
          });
          console.log(d);
        });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return <>
      <h1>All Products</h1>
      <section className="products">
    {
      this.state.products.map((p)=>(
          <section key={p.food.foodId} className="card">
            <img src={p.food.image} alt="image"></img>
            <h1>{p.food.knownAs}</h1>
            <Link className="detail-btn" to={`${p.food.foodId}`}>View Details</Link>
            </section>
      ))
    }
      </section>
    </>;
  }
}
