import React from 'react';

const Footer = ({ data }) => {
  let networks = null;
  if (data) {
    networks = data.social.map((network) => (
      <li key={network.name}>
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.className}></i>
        </a>
      </li>
    ));
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul>
            <li></li>
          </ul>

          <ul className="copyright">
            <li>&copy; All credit goes to Venu - Copyright 2018 Venu</li>
            {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
