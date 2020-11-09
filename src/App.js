import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> Welcome to the Rick and Morty React Challenge</h1>
      <div className="container">
        <img alt="Home.jpg" src="./Home.jpg" />
        <img alt="Detail.jpg" src="./Detail.jpg" />
      </div>
      <div className="instructions">
        <h2>Instructions:</h2>
        <h3>Main: </h3>
        <p>
          Create a Rick and Morty website using the Rick and Morty API: Using
          the provided designs.
        </p>
        <a href="https://rickandmortyapi.com/documentation">API Link</a>
        <p>Homepage features: </p>
        <ul>
          <li>
            - Shared header with All episodes and All locations links (Should
            trigger a search)
          </li>
          <li>
            - Hero banner with Title, subtitle and button (No functionality
            here)
          </li>
          <li>
            - Search bar with dropdown filter with these options: Episodes,
            Characters and locations. And input text to search
          </li>
          <li>- Search result container to show results with cards</li>
          <li>- Pagination and dropdown to choose items per page</li>
          <li>
            - Shared footer with data about: Total characters, total locations
            and total episodes and social buttons
          </li>
          <li>- Clicking on a card, will go to the card detail page</li>
          <li>
            - Cards should have a hover state, provided in the design: First
            card. (glow effect)
          </li>
        </ul>
      </div>
    </div>
  );
}
