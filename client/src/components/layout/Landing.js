import React, { Component } from "react";
import { connect } from "react-redux";

import { getCategories } from "../../actions/categoryActions";
import { getSkills } from "../../actions/skillActions";

import Category from "../skills/Category";
import Basket from "../basket/Basket";

class Landing extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getSkills();
  }
  render() {
    const { categories } = this.props.categories;
    const { skills } = this.props.skills;
    return (
      <div>
        <div className="container-fluid">
          <div className="row p-0">
            {/* <!-- CATEGORIES --> */}
            <div className="col-sm-12 col-md-8 col-lg-9 p-5 pt-1">
              <div className="mb-5 mt-2">
                <h1 className="welcome">Bienvenue sur Adopte un dev !</h1>
                <h4 className="mb-5">
                  Le meilleur site pour trouver votre futur développeur web
                </h4>
                <p>
                  Si vous recherchez un développeur web, il vous suffit de
                  choisir et d'ajouter les talents dont vous avez besoin à votre
                  panier puis de cliquer sur "Trouve mon dév".
                </p>
                <p>
                  Nous choisirons le meilleur profile dans notre base de donnée
                  et si ce dernier vous intéresse, ne soyez pas timide,
                  envoyez-lui un petit mot ;-)
                </p>
                <p>
                  Si vous êtes développeur web, il vous suffit de cliquer sur
                  "créer un compte". C'est totalement gratuit et vous pourrez
                  créer votre profil. Si celui-ci intéresse une entreprise, vous
                  recevrez rapidement des offres !
                </p>
                <h5>Merci d'utiliser Adopte un dév et amusez-vous bien...</h5>
              </div>
              <Category categories={categories} skills={skills} />
            </div>

            {/* <!-- SIDEBAR --> */}
            <div className="col-sm-12 col-md-4 col-lg-3 pt-5">
              <div className="sticky-top">
                <Basket />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  skills: state.skills
});

export default connect(
  mapStateToProps,
  { getCategories, getSkills }
)(Landing);
