import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import img from '../Image/photo-recette.jpeg';

const titleMention = `Mentions légales En vigueur au 31/01/2023`;
const entete = `Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l""Utilisateur", du site sandrine-coupart-nutritionniste.fr , ci-après le "Site", les présentes mentions légales. La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ». ARTICLE 1 - L'EDITEUR L’édition et la direction de la publication du Site est assurée par ALAMELOU Lucas, domiciliée XXX , dont le numéro de téléphone est XXX
, et l'adresse e-mail lucas.alamelou@gmail.com. ci-après l'"Editeur".`;
const article1 = `ARTICLE 1 - L'EDITEUR L’édition et la direction de la publication du Site est assurée par ALAMELOU Lucas, domiciliée 155 rue de Vaugirard , dont le numéro de téléphone est 0689552943, et l'adresse e-mail lucas.alamelou@gmail.com. ci-après l'"Editeur".`;
const article2 = `ARTICLE 2 - L'HEBERGEUR L'hébergeur du Site est la société Heroku, dont le siège social est situé au _______________ , avec le numéro de téléphone : _______________ + adresse mail de contact`;
const article3 = `ARTICLE 3 - ACCES AU SITE Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.`;
const article4 = `ARTICLE 4 - COLLECTE DES DONNEES Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit : · via un formulaire de contact ;  Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.`;

const Mention = () => {
  return (
    <>
      <Header />
      <img src={img} alt="img-recette" className="img-recette"></img>
      <div className="mention-legal">
        <h2 className="title">{titleMention}</h2>
        <p className="article">{article1}</p>
        <p className="article">{article2}</p>
        <p className="article">{article3}</p>
        <p className="article">{article4}</p>
      </div>
      <Footer />
    </>
  );
};

export default Mention;
