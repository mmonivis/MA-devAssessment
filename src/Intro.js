import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-info col-lg-6">
        	<h4>DIAMOND CONTRACTORS</h4>
        	<h1>Rise to the Top</h1>
        	<hr />
        	<p>At Mitsubishi Electric, we are committed to providing our Diamond Contractors resources 
to build their businesses. Diamond Contractors have access to exceptional tools, business development strategies and best-in-class products that help drive sales. By achieving 
an outstanding level of training, expertise and customer satisfaction, Diamond Contractors are preferred by homeowners for providing the best sales, installation and service in the industry.</p>
        </div>
        <div className="intro-image col-lg-6">
        	<img src="./assets/images/CS_Terra_Caelo_03-FloorUnit.png" />
        </div>
      </div>
    );
  }
}

export default Intro;