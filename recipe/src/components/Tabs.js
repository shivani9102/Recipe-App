import React, { useState } from "react";
import { CiPizza } from "react-icons/ci";
import { GiNoodles, GiFruitBowl, GiCheckMark } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";

function Tabs() {
  const [activeTab, setActiveTab] = useState("pizza");

  const tabContent = {
    pizza: {
      badge: "Italian",
      title: "White Pizza",
      recipeBy: "Food52",
      ingredients: [
        "Fresh ground pepper",
        "Olive oil",
        "Ricotta",
        "Basil",
        "Garlic",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80",
    },
    noodles: {
      badge: "Asian",
      title: "Spicy Noodles",
      recipeBy: "Chef Lee",
      ingredients: [
        "Noodles",
        "Chili oil",
        "Soy sauce",
        "Scallions",
        "Chicken",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=60",
    },
    dessert: {
      badge: "Delicious",
      title: "Fruit Bowl",
      recipeBy: "Healthy Eats",
      ingredients: ["Mixed fruits", "Mint", "Honey", "Yogurt"],
      imageUrl:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=60",
    },
    iceCream: {
      badge: "Sweet",
      title: "Ice Cream Sundae",
      recipeBy: "Dessert Delights",
      ingredients: ["Vanilla ice cream", "Chocolate syrup", "Nuts", "Cherries"],
      imageUrl:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=60",
    },
  };

  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        <div
          className={`tablist ${activeTab === "pizza" ? "active" : ""}`}
          onClick={() => setActiveTab("pizza")}
        >
          <CiPizza />
          <span>Pizza</span>
        </div>
        <div
          className={`tablist ${activeTab === "noodles" ? "active" : ""}`}
          onClick={() => setActiveTab("noodles")}
        >
          <GiNoodles />
          <span>Noodles</span>
        </div>
        <div
          className={`tablist ${activeTab === "dessert" ? "active" : ""}`}
          onClick={() => setActiveTab("dessert")}
        >
          <GiFruitBowl />
          <span>Desert</span>
        </div>
        <div
          className={`tablist ${activeTab === "iceCream" ? "active" : ""}`}
          onClick={() => setActiveTab("iceCream")}
        >
          <MdOutlineIcecream />
          <span>Ice Cream</span>
        </div>
      </div>
      <div className="recipe_banner">
        <div className="left-col">
          <span className="badge">{tabContent[activeTab].badge}</span>
          <h1>{tabContent[activeTab].title}</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>{tabContent[activeTab].recipeBy}</small>
          </p>
          <h3>Ingredients</h3>
          <div className="ingredients">
            <ul>
              {tabContent[activeTab].ingredients.map((ingredient, index) => (
                <li key={index}>
                  <GiCheckMark size="18px" color="#6fcb9f" />
                  &nbsp;{ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-col">
          <div className="image-wrapper">
            <img
              src={tabContent[activeTab].imageUrl}
              alt={tabContent[activeTab].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
