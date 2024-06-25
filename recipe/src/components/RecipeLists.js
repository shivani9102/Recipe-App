import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../service";

function RecipeList({ setLoader, loader }) {
  console.log("These are props", { setLoader, loader });
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");

  const searchRecipe = () => {
    setLoader(true);
    setQuery(searchedTerm);
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      setLoader(false);
    });
  }, [query, setLoader]);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
            type="text"
            placeholder="Search your Recipe"
          />
          <button onClick={searchRecipe}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {loader ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.hits?.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecipeList;
