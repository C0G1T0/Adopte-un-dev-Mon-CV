import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSkills } from "../../actions/skillActions";
import { sendMessage } from "../../actions/messageActions";
import TextFieldGroup from "../form/TextFieldGroup";
import TextAreaFieldGroup from "../form/TextAreaFieldGroup";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      firstname: "",
      lastname: "",
      position: "",
      company: "",
      adress: "",
      city: "",
      country: "",
      email: "",
      phone: "",
      message: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Skills pie: function to add one to the pie
  tick() {
    if (this.state.seconds < 100) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    } else {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    // Launch of function tick every 10mls
    this.interval = setInterval(() => this.tick(), 10);
    this.props.getSkills();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newMessage = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      position: this.state.position,
      company: this.state.company,
      adress: this.state.adress,
      city: this.state.city,
      country: this.state.country,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    };
    this.props.sendMessage(newMessage, this.props.history);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { errors } = this.state;
    const skills = this.props.skills.skills
      .filter(skill => skill.category !== "5b782d9efb6fc066d427d655")
      .map(skill => (
        <div key={skill._id} className="col-sm-2 mb-5">
          <div className="card">
            <img
              className="card-img-top"
              src={`/uploads/${skill.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^\w]/gi, "")}.png`}
              alt={`${skill.name}`}
            />
            <div className="card-body">
              <p
                className="card-title text-center"
                style={{ fontSize: "0.7rem" }}
              >
                {skill.name}
              </p>
            </div>
          </div>
        </div>
      ));

    return (
      <div>
        <div className="container">
          <div className="row text-center mt-5 mb-3">
            <h2 className=" col-12 mb-3">
              Nous avons trouvé votre futur développeur web et son nom est...
            </h2>
            <h2 className="col-12 mb-3 devname">Guillaume!</h2>{" "}
          </div>
          <div className="row mb-5">
            <div className="col-md-3 mt-3 pt-2">
              <img
                src="uploads/stamp.png"
                alt="It's a match!"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-6 mt-3">
              <h4>Quelle chance !</h4>
              <h5>
                Guillaume possède 100% des talents que vous avez seléctionnés !
              </h5>
              <p>
                La suite est très facile : jetez un oeil à son profil pour en
                savoir plus sur lui. Si vous aimez ce que vous voyez et j'espère
                que ce sera le cas, laissez-lui un message via le formulaire que
                vous trouverez en bas de page.
              </p>
              <p>Guillaume reviendra vers vous très rapidement. </p>
              <p> Encore merci d'avoir choisi Adopte un dév !</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 mt-5">
              <div className="pie-wrap">
                <div className="slice1 slice-wrap"> </div>
                <div className="slice2 slice-wrap"> </div>
                <div className="number">
                  <h3>{this.state.seconds}%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid alert-info">
          <div className="container">
            <div className="row ">
              <h2 className="col-12 mt-5">Portrait de Guillaume</h2>
            </div>
            <div className="row alert-info">
              <div className="col-md-6 col-sm-12 mb-5 mt-4">
                <p>
                  Je crée et gère des sites wordpress tout en voyageant depuis
                  environ 5 ans. C'est une très bonne expérience qui m'a permis
                  d'apprendre beaucoup de choses sur tous les domaines d'un site
                  internet.
                </p>
                <p>
                  J'ai du apprendre comment créer et héberger un site worpdress.
                  Découvrir le SEO, faire des recherches de mots clés, écrire du
                  contenu optimisé, mettre en place une stratégie pour obtenir
                  des liens et finalement gérer et contrôler mes résultats en
                  terme de traffic et de ranking.
                </p>
                <p>
                  J'ai également pu acquérir des compétences en design pour
                  notamment créer des logos. Finalement, j'ai également appris à
                  rester en contact avec mes visiteurs à travers les réseaux
                  sociaux, des listes d'emails et des newsletters.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 mt-3">
                <p>
                  De retour en France, j'ai décidé d'approfondir le code et
                  d'apprendre de nouvelles façons de créer un site en partant de
                  rien.
                </p>
                <p>
                  Jusqu'à présent, j'ai appris des languages de base comme HTML,
                  CSS mais aussi JavaScript. Je suis désormais capable de créer
                  un backend avec Node et Express. Je peux également créer une
                  base de donnée avec MySQL et MongoDB. Enfin je peux également
                  créer le frontend avec React et Redux.
                </p>
                <p>
                  J'essaye d'apprendre quelque chose de nouveau tous les jours
                  donc j'espère ajouter très bientôt de nouveaux talents (je
                  travaille en ce moment sur le Test Driven Development avec
                  Jest).
                </p>
                <p>
                  Je viens de finir une formation full stack développeur web
                  avec la Wild code school et je recherche maintenant un stage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <h2 className="col-12">Talents professionnels</h2>
          </div>
          <div className="row mt-4">{skills}</div>
        </div>
        <div className="container-fluid alert-info">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6 col-sm-12 mb-5">
                <div className="row mb-5">
                  <h2 className="col-12 mt-5">Expérience</h2>
                </div>
                <div className="row">
                  <p className="col-2">2018</p>
                  <p className="col-8">
                    <u>Wild code school formation</u>
                    <br /> formation développeur web full stack
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2017-2011</p>
                  <p className="col-8">
                    <u>Développeur de sites Wordpress en freelance</u>
                    <br />
                    Creation et gestion de sites wordpress en freelance (5 ans à
                    l'étranger)
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2011-2009</p>
                  <p className="col-8">
                    <u>Menuisier</u>
                    <br />
                    Menuisier à Paris, Annecy et Perth (Australie)
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2007-2001</p>
                  <p className="col-8">
                    <u>Gérant de restaurants</u>
                    <br />
                    Gérant de restaurant d'entreprise à Paris pour Compass Group
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="row mb-5">
                  <h2 className="col-12 mt-5">Education</h2>
                </div>
                <div className="row ">
                  <p className="col-2">2018</p>
                  <p className="col-8">
                    <u>Wild code school formation</u>
                    <br /> formation developpeur web full stack
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2016</p>
                  <p className="col-8">
                    <u>Diplôme d'enseignement du Français</u>
                    <br /> Alliance Française de Sydney Australie
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2014</p>
                  <p className="col-8">
                    <u>CAP Pâtissier</u>
                    <br /> en candidat libre à Paris France
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">2008</p>
                  <p className="col-8">
                    <u>CAP menuisier</u>
                    <br /> AFPA Meaux France
                  </p>
                </div>
                <div className="row">
                  <p className="col-2">1999</p>
                  <p className="col-8 m-0 p-0">
                    <u>BTS Gestion Marketing en Hôtellerie Restauration</u>
                    <br />
                    Ecole hôtelière Le Castel Dijon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-5 text-center">
              <img
                className="img-fluid"
                src="uploads/yourturn.png"
                alt="Enought about me"
              />
            </div>
            <div className="col-md-8 col-sm-12 mt-5">
              <div className="row col-12">
                <h2>A vous de jouer !</h2>
              </div>
              <div className="row col-12">
                <p>
                  J'espère que vous avez pris du plaisir à surfer sur mon site
                  et que mon profil vous intéresse.
                </p>
                <p>
                  Si c'est le cas, ça veut sûrement dire que nous pourrions
                  réaliser de beaux projets ensemble. Donc ne perdez pas plus de
                  temps et dîtes-moi ce que je peux faire pour vous en
                  remplissant le formulaire ci-dessous.
                </p>
                <p>
                  Si vous n'avez pas aimé, j'apprécierais quand même un retour
                  de votre part. Peut-être que vous n'avez pas aimé le code, le
                  design ou peut-être que vous avez besoin d'autres compétences
                  ?
                </p>
                <p>
                  Donc n'hésitez pas à me donner le fond de votre pensée. N'ayez
                  pas peur de me froisser, rassurez-vous, je sais que l'on peut
                  toujours faire mieux ;-)
                </p>
                <p>
                  Dans tous les cas, merci encore d'avoir pris un peu de votre
                  temps pour visiter mon site. J'espère à très bientôt et que la
                  force soit avec vous !
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 mb-5">
              <img
                className="img-fluid"
                src="uploads/expressyourself.png"
                alt="Express yourself"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 m-auto mb-5">
              {/* noValidate to get rid of html5 validation msg */}
              <form noValidate onSubmit={this.onSubmit} className="mb-5">
                <TextFieldGroup
                  placeholder="Prénom"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  error={errors.firstname}
                />
                <TextFieldGroup
                  placeholder="Nom"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  error={errors.lastname}
                />
                <TextFieldGroup
                  placeholder="Position dans l'entreprise"
                  name="position"
                  value={this.state.position}
                  onChange={this.onChange}
                  error={errors.position}
                />

                <TextFieldGroup
                  placeholder="Nom de l'entreprise"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <TextFieldGroup
                  placeholder="Adresse de l'entreprise"
                  name="adress"
                  value={this.state.adress}
                  onChange={this.onChange}
                  error={errors.adress}
                />
                <TextFieldGroup
                  placeholder="Ville de l'entreprise"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                  error={errors.city}
                />
                <TextFieldGroup
                  placeholder="Pays de l'entreprise"
                  name="country"
                  value={this.state.country}
                  onChange={this.onChange}
                  error={errors.country}
                />

                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Téléphone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />
                <TextAreaFieldGroup
                  placeholder="Cher Guillaume..."
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  error={errors.message}
                />

                <input
                  type="submit"
                  value="Envoyez mon message à Guillaume !"
                  className="btn btn-primary btn-block mt-4 subheading"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getSkills, sendMessage }
)(withRouter(Profile));
