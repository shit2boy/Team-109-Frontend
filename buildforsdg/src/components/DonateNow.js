import React from "react";
import Formfield from "./Formfield";
import { Button, Modal } from "react-bootstrap";

class DonateNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentType: true,
      modalShow: false,
      modalTitle: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  setModalHide = () => {
    this.setState({ modalShow: false, modalTitle: "" });
  };

  setModalShow = () => {
    this.setState({
      modalShow: true,
      modalTitle: "Please Select Donation mode.",
    });
  };

  render() {
    return (
      <div>
        <p onClick={() => this.setModalShow(true)}>Donate Now</p>

        <Modal
          closeButton
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.modalShow}
          onHide={() => this.setModalHide(false)}
        >
          <Modal.Header className="tc" closeButton>
            {this.state.modalTitle}
          </Modal.Header>
          <Modal.Body className="center">
            <form onSubmit={this.onSubmit}>
              <label>Credit card:</label>
              <Formfield
                name="isPaymentType"
                type="checkbox"
                checked={this.state.isPaymentType}
                onChange={this.handleInputChange}
              />

              <label>
                Paypal:
                <Formfield
                  name="isPaymentType"
                  type="checkbox"
                  checked={this.state.isPaymentType}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <label>
                First name:
                <Formfield
                  className=" pa2 w-100 ml1"
                  name="firstName"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Lastname:
                <Formfield
                  className=" w-100"
                  name="lastName"
                  type="text"
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <label>
                Email:
                <Formfield
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
              <Button
                className="w-100 bg-warning"
                variant="success"
                type="submit"
              >
                Donate
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default DonateNow;
