import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Brand from './keycomponents/Brand';
import Product from './keycomponents/Product';
import Advertising from './keycomponents/Advertising';
import Leads from './keycomponents/Leads';
import Support from './keycomponents/Support';
import Warranty from './keycomponents/Warranty';
import Recognition from './keycomponents/Recognition';
import EmailForm from './EmailForm';
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
	        	<a className="kc-button"><Link to="/brand" activeClassName="active">BRAND</Link></a>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/product" activeClassName="active">PRODUCT</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/advertising" activeClassName="active">ADVERTISING</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/leads" activeClassName="active">LEADS</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/support" activeClassName="active">SUPPORT</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/warranty" activeClassName="active">WARRANTY</Link></a></div>
	        	<div className="link-wrapper"><a className="kc-button"><Link to="/recognition" activeClassName="active">RECOGNITION</Link></a></div>
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
				<EmailForm />
	        </div>
	      </div>
      </Router>
    );
  }
}

export default KeyComponents;