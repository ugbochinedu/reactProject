import React from "react";
import './portfolio.css'
import image from '../images/photo-1.jpeg'

const MyPortfolio = ()=>{


    return (
      <div>
        <div className="nav-box">
          <nav className="nav-bar">
            <h1 className="logo">UG.</h1>
            <ul className="links">
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">SERVICE</a>
              </li>
              <li>
                <a href="">WORKS</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hero-page">
          <div className="text-area">
            <p className="hero-text">Hello</p>
            <p className="hero-text1">
              I'm <span>Ugbo Chinedu</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              voluptatum laudantium ea ipsum. Necessitatibus officia reiciendis
              neque facilis, error modi laborum suscipit alias blanditiis aut
              placeat, eum hic unde architecto.
            </p>
            <p className="hire-me">Hire me</p>
            <p className="p">hhehhee</p>
          </div>
          <div className="img1">
            <img src={image} alt="" />
          </div>
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <p className="p">hhehhee</p>
        </div>
      </div>
    );
}

export default MyPortfolio;