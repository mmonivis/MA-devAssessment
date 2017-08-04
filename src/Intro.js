import React, { Component } from 'react';

class Intro extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currImage: './assets/images/CS_Terra_Caelo_03-FloorUnit.png'
      }
    }

  componentDidMount() {
    const images = ['CS_HotelWilshire_41.png','stairs-home-loft-lifestyle.png', 'pexels-photo-299629 copy.png', 'CS_Terra_Caelo_03-FloorUnit.png'];
    var counter = 0;
    setInterval(()=>{
      this.setState({
        currImage: `./assets/images/${images[counter]}`
      })
      counter++;
      if (counter >= images.length){
        counter = 0;
      }
    },3000)
  }

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
        	<img id="cycleImage" src={this.state.currImage} />
        </div>
      </div>
    );
  }
}

export default Intro;