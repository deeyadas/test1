import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1>About</h1>

      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
          Become essential to our customers by providing differentiated products and services to help them achieve their aspirations.
          </p>
        </div>

        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>
          To inspire and impact the world with vision, purpose, and style.
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body">
          <h3>Additional Info</h3>
          <p>
            thank you for travelling with us. ! hope you will opt our service next time
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;