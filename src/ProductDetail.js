import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(id);
    const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free&ingr=${id}`;
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
          console.log(d);
          setProducts(d.hints);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <section>
        {products.map((p) => (
          <section key={p.food.foodId} className="card-2">
            <img src={p.food.image}></img>
            <h1>{p.food.knownAs}</h1>
            <sections>
              <h2>NUTRIENTS</h2>
              <h3>CHOCDF : {p.food.nutrients.CHOCDF} </h3>
              <h3>ENERC_KCAL {p.food.nutrients.ENERC_KCAL}</h3>
              <h3>FAT {p.food.nutrients.FAT}</h3>
              <h3>FIBTG {p.food.nutrients.FIBTG}</h3>
              <h3>PROCNT {p.food.nutrients.PROCNT}</h3>
            </sections>
          </section>
        ))}
      </section>
    </>
  );
}
