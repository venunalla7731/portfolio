import React from 'react';

const Header = (props) => {

  let name, occupation, description, networks;

  if (props.data) {
    name = props.data.name;
    occupation = props.data.occupation;
    description = props.data.description;
    networks = props.data.social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">Home</a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">About</a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">Resume</a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">Works</a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            As a <span>{occupation}</span> based in the United States, I
            specialize in {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
