import React, { Component } from 'react';

class Masthead extends Component {
  render() {
    return (
      <div className="masthead">
        <div className="mit-elec-logo col-md-12">
      		<img src="./assets/images/mit_elec_logo.png" alt="Mitsubishi Electric Cooling and Heating Logo" />
        </div>
        <div className="masthead-info-section">
        	<h1>DIAMOND CONTRACTOR&trade; PROGRAM</h1>
        	<hr />
        	<p>Join the elite team of Mitsubishi Electric Diamond Contractors and get exclusive access to powerful sales, marketing and service tools that drive more sales and elevate your business.</p>
        	<a href="#">GET STARTED</a>
        </div>
      </div>
    );
  }
}

export default Masthead;