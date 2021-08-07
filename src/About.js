import React from "react";

export default function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About </h1>
        <p>
          This final project by <a id="name-link" href="https://github.com/Raymond-JS" target="_blank" rel="noreferrer">Ray</a> demonstrates React proficiency with the following:
          <br />
          <ul>
            <li>Props</li>
            <li>State</li>
            <li>Hooks</li>
            <li>Effect</li>
            <li>Components</li>
            <li>Immutability</li>
            <li>Events</li>
            <li>Forms</li>
            <li>Lifting state up</li>
            <li>Passing props down</li>
            <li>Using APIs & fetch</li>
            <li>Custom hooks</li>
            <li>Restoring from localStorage</li>
            <li>React Router</li>
          </ul>        

 <br />
          
        </p>
      </div>
      <img
        src="./images/groceries-im.jpeg"
        height="275"
        width="383"
        className="rounded"
        alt=""
      />
    </div>
  );
}
