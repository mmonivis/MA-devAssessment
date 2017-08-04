import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer col-md-12">
        <div className="mit-elec-logo-footer col-md-2 col-md-offset-2">
        	<img src="./assets/images/ME-CH-1-Color-REV.png" alt="Mitsubishi Electric Cooling and Heating Logo" />
        </div>
        <div className="footer-links text-center col-md-6">
        	<div className="social text-center col-md-12">
        		<a href="#" className="social-button"><i className="fa fa-facebook" aria-hidden="true"></i></a>
				<a href="#" className="social-button"><i className="fa fa-twitter" aria-hidden="true"></i></a>
				<a href="#" className="social-button"><i className="fa fa-instagram" aria-hidden="true"></i></a>
				<a href="#" className="social-button"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
				<a href="#" className="social-button"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
				<a href="#" className="social-button"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
				<a href="#" className="social-button"><i className="fa fa-houzz" aria-hidden="true"></i></a>
				<a href="#" className="social-button text-center b-blog"><span className="lg-b">B</span> blog</a>
        	</div>
        	<hr />
        	<div className="sitemap text-center col-md-12">
        		<a href="#">Residential</a> |
        		<a href="#">Professionals</a> |
        		<a href="#">Contact</a> |
        		<a href="#">Extranet</a> |
        		<a href="#">Privacy Policy</a> |
        		<a href="#">Terms of Use</a>
        	</div>
        </div>
        <div className="copywrite text-center col-md-12">
        	&copy; 2017 Mitsubishi Electric US, Inc.
        </div>
      </div>
    );
  }
}

export default Footer;