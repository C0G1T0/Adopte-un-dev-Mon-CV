import React, { Component } from "react";
import { connect } from "react-redux";

class ThankU extends Component {
  render() {
    const { contact } = this.props.contact;
    console.log(contact);
    return (
      <div className="container">
        <div className="row text-center mb-1">
          <div className="col-12 text-center">
            <p className="contact">Merci {contact.firstname}</p>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-12 text-center">
            <h4>
              Votre message a bien été envoyé et je reviens vers vous au plus
              vite.
            </h4>
          </div>
          <div className="col-12 text-center">
            <h4>
              En attendant, pourquoi ne pas m'ajouter sur LinkedIn
              <br />
              pour que l'on reste en contact plus facilement ?
            </h4>
          </div>
        </div>
        <div className="row p-3 text-center">
          <div className="col-12 text-center">
            <a
              href="https://www.linkedin.com/in/guillaume-nobis/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid p-3"
                src="/uploads/linkedin-contact.png"
                alt="Contact linkedin"
              />
            </a>
          </div>
        </div>
        <div className="row p-3 mb-5">
          <div className="text-center col-12">
            <h2>A très bientôt {contact.firstname} !</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact
});

export default connect(
  mapStateToProps,
  null
)(ThankU);
