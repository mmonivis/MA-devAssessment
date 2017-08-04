import React, { Component } from 'react';
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';

class Brochure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  
  close() {
    this.setState({
     showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>

        <button type="button" className="download-button" onClick={this.open}>
          DOWNLOAD <img src="./assets/images/pdf-icon.png" />
        </button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <h1>Ready to Get Started?</h1>
            <hr />
            <h4>If you would like to learn more about how the Diamond Contractor program can help you build your business or are ready to get started, please complete the form below. We will contact you shortly to see how we can help.</h4>

            <form>
              <div className="left-form col-md-6">
                <div className="input-form">
                  <span className="red-star">*</span> FIRST NAME
                  <input type="text" name="first" />
                </div>
                <div className="input-form">
                  <span className="red-star">*</span> COMPANY
                  <input type="text" name="company" />
                </div>
                <div className="input-form">
                  <span className="red-star">*</span> COMPANY CITY
                  <input type="text" name="companyCity" />
                </div>
              </div>
              <div className="right-form col-md-6">
                <div className="input-form">
                  <span className="red-star">*</span> LAST NAME
                  <input type="text" name="last" />
                </div>
                <div className="input-form">
                  <span className="red-star">*</span> EMAIL ADDRESS
                  <input type="email" name="email" />
                </div>
                <div className="input-form">
                  <span className="red-star">*</span> CONTACT PHONE NUMBER
                  <input type="tel" name="phone" />
                </div>
              </div>
            </form>

            <hr />

            <Button onClick={this.close}>Close</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Brochure;