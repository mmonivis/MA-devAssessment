import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Brand from './keycomponents/Brand';
import Product from './keycomponents/Product';
import Advertising from './keycomponents/Advertising';
import Leads from './keycomponents/Leads';
import Support from './keycomponents/Support';
import Warranty from './keycomponents/Warranty';
import Recognition from './keycomponents/Recognition';
import Brochure from './Brochure';
import $ from 'jquery';

class KeyComponents extends Component {

	handleModal(){

	}

  render() {

	// $('.kc-button').click(function(){
	// 	$('.kc-button').removeClass("selected");
	// 	$(this).addClass("selected");
	// });

    return (
    <Router>
      <div className="key-components col-md-12">
	        <div className="kc-title col-md-12">
	        	<h4>THE PROGRAM</h4>
	        	<h1>Key Components</h1>
	        	<hr />
	        </div>
	        <div className="kc-nav col-md-12">
	        	<a className="kc-button"><Link to="/brand">BRAND</Link></a>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/product">PRODUCT</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/advertising">ADVERTISING</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/leads">LEADS</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/support">SUPPORT</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/warranty">WARRANTY</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/recognition">RECOGNITION</Link></a></div>
	        </div>
	        <div className="kc-desc col-md-12">
	        	<Route exact path="/" component={Brand} />
	        	<Route exact path="/brand" component={Brand} />
				<Route exact path="/product" component={Product} />
				<Route exact path="/advertising" component={Advertising} />
				<Route exact path="/leads" component={Leads} />
				<Route exact path="/support" component={Support} />
				<Route exact path="/warranty" component={Warranty} />
				<Route exact path="/recognition" component={Recognition} />
	        </div>
	        <div className="brochure-button col-md-12 text-center">
				<Brochure />
	        </div>
	      </div>
      </Router>
    );
  }
}

export default KeyComponents;