import React, { useEffect, useState } from "react";
import Recipe from "./Recipes";

export default function App() {
  const appID = "7d094beb";
  const appKEY = "2d25fe2535ae449a27b69c01bdb23576";

  useEffect(() => {
    getRecipe();
  }, []);

  var [up, setup] = useState("banana");

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=banana&app_id=${appID}&app_key=${appKEY}`
    );
    const data = await response.json();
    var info = data.hits;
    setup(info);
  };

  return (
    <div className="APP">
      <form>
        <input></input>
        <button>search</button>
      </form>
      {up.map((item) => (
        <Recipe />
      ))}
    </div>
  );
}
