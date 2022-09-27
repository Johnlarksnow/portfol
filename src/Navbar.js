import React from "react";
import './App.css';
import logo from './shiba.png';

export default function Navbar() {
  return (
    <div className="maindiv">
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="App-header">
          <h1 className="headertext">Apps</h1>
          <h1 className="headertext">Skills</h1>
          <h1 className="headertext">Social Media</h1>
        </div>
      </header>
      <div className="centerbody">
        <div className="main-center">
          <div className="left">
            <h1>Hi, </h1>
            <p className="matt">I am Matt </p>
            <p className="computerscience">I like computer science cause its cool</p>
          </div>
          <div className="right">
            <div className="logo">

            </div>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="portDiv">
          <div className="small-div"></div>
          <h1>Portfolio</h1>
          <div className="card">
              <div className="top-of-card">
                
              </div>
              <div>
                <p className="thing">Blockchain Techonlogy</p>
              </div>
          </div>
        </div>
      </div>
    </div>

  );
}