import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BasketContent from "./BasketContent";

class Basket extends Component {
  render() {
    const basket = this.props.basket;
    const length = basket.basket.length - 1;
    let numberSkill;
    let disabled;
    length > 1 ? (numberSkill = "Talents") : (numberSkill = "Talent");
    length > 0 ? (disabled = false) : (disabled = true);

    return (
      <div
        className="col-sm-12 p-3 border rounded mb-5"
        style={{ borderWidth: "3px !important" }}
      >
        <div className="row">
          <div className="col-6">
            <img
              className="img-fluid"
              src="uploads/shopping-cart.png"
              alt="developer skills"
            />
          </div>
          <div className="col-6 text-center">
            <div>
              <button
                type="button"
                className="btn btn-primary rounded-circle btn-xl pt-2 mb-2"
                style={{ width: "90px", height: "90px" }}
              >
                <p className="skillCounter">{length}</p>
              </button>
            </div>
            <div className="col-md-12 mt-2 p-0 text-center">
              <p className="numberskill">{numberSkill}</p>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <BasketContent basket={basket} />
        </div>
        <Link to="/search">
          <div className="row mt-3 mb-3 pr-3 pl-3">
            <button
              type="button"
              className="btn btn-primary btn-md btn-block findmydev p-1"
              disabled={disabled}
            >
              Trouve mon dév !
            </button>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket
});

export default connect(
  mapStateToProps,
  null
)(Basket);
