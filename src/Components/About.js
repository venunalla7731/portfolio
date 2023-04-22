import React from 'react';

const About = ({ data }) => {
  if (!data) {
    return null;
  }

  const {
    name,
    image,
    bio,
    address: { street, city, state, zip },
    phone,
    email,
    resumedownload,
  } = data;

  const profilepic = "images/" + image;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilepic} alt="Profile" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={resumedownload}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <i className="fa fa-envelope-o"></i>Open Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
