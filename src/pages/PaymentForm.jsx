import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import '../assets/css/Checkout.scss' 

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Processed Successfully!");
  };

  render() {
    return (
      <div id="PaymentForm">
        {/* Credit Card UI */}
        <Cards className='card-ui'
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />

        {/* Payment Form */}
        <form onSubmit={this.handleSubmit} className="form-submit">
          {/* Card Number */}
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            maxLength="16"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />

          {/* Cardholder Name */}
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />

          {/* Expiry Date */}
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            maxLength="5"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />

          {/* CVC */}
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            maxLength="4"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
          />

          {/* Submit Button */}
          <button type="submit">Pay Now</button>
        </form>
      </div>
    );
  }
}
