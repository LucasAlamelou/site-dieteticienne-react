import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import img from '../Image/photo-recette.jpeg';
import { Link } from 'react-router-dom';

const lien = <Link to="mentions-legale">Mentions légale</Link>;
const title = `Sandrine Coupart / diétécienne-nutrioniste`;
const article1 = `ARTICLE 1 : PRÉAMBULE
La présente politique de confidentialité a pour but d’informer les utilisateurs du site :
Sur la manière dont sont collectées leurs données personnelles. Sont considérées comme des données personnelles, toute information permettant d’identifier un utilisateur. A ce titre, il peut s’agir : de ses noms et prénoms, de son âge, de son adresse postale ou email, de sa localisation ou encore de son adresse IP (liste non-exhaustive) ;
Sur les droits dont ils disposent concernant ces données ;
Sur la personne responsable du traitement des données à caractère personnel collectées et traitées ;
Sur les destinataires de ces données personnelles ;
Sur la politique du site en matière de cookies.
Cette politique complète les mentions légales et les Conditions Générales d’Utilisation consultables par les utilisateurs à l’adresse suivante :
${lien}`;
const article2 = `ARTICLE 2 : PRINCIPES RELATIFS À LA COLLECTE ET AU TRAITEMENT DES DONNÉES PERSONNELLES
Conformément à l’article 5 du Règlement européen 2016/679, les données à caractère personnel sont :
Traitées de manière licite, loyale et transparente au regard de la personne concernée ;
Collectées pour des finalités déterminées (cf. Article 3.1 des présentes), explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités ;
Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées ;
Exactes et, si nécessaire, tenues à jour. Toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder ;
Conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées ;
Traitées de façon à garantir une sécurité appropriée des données collectées, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées.`;

const article3 = `Article 3.1 : Données collectées
Les données personnelles collectées dans le cadre de notre activité sont les suivantes :
email, nom, prénom.
La collecte et le traitement de ces données répond à la (aux) finalité(s) suivante(s) :
gestion de l'espace client.
Article 3.2 : Mode de collecte des données
Lorsque vous utilisez notre site, sont automatiquement collectées les données suivantes :
rien.
D’autres données personnelles sont collectées lorsque vous effectuez les opérations suivantes sur la plateforme :
demande de contact avec nom, prénom, numéro de téléphone et adresse email.

Elles sont conservées par le responsable du traitement dans des conditions raisonnables de sécurité, pour une durée de : 5 ans.
La société est susceptible de conserver certaines données à caractère personnel au-delà des délais annoncés ci-dessus afin de remplir ses obligations légales ou réglementaires.

Article 3.3 : Hébergement des données
Le site  est hébergé par :
heroku.`;
const article6 = `ARTICLE 6 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ
L’éditeur du site -- se réserve le droit de pouvoir modifier la présente Politique à tout moment afin d’assurer aux utilisateurs du site sa conformité avec le droit en vigueur.
Les éventuelles modifications ne sauraient avoir d’incidence sur les achats antérieurement effectués sur le site, lesquels restent soumis à la Politique en vigueur au moment de l’achat et telle qu’acceptée par l’utilisateur lors de la validation de l’achat.
L’utilisateur est invité à prendre connaissance de cette Politique à chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de l’en prévenir formellement.
La présente politique, éditée le [date de mise en ligne], a été mise à jour le 30/01/2023.`;

const article5 = `ARTICLE 5 : LES DROITS DE L’UTILISATEUR EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DES DONNÉES
Tout utilisateur concerné par le traitement de ses données personnelles peut se prévaloir des droits suivants, en application du règlement européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6 janvier 1978) :
Droit d’accès, de rectification et droit à l’effacement des données (posés respectivement aux articles 15, 16 et 17 du RGPD) ;
Droit à la portabilité des données (article 20 du RGPD) ;
Droit à la limitation (article 18 du RGPD) et à l’opposition du traitement des données (article 21 du RGPD) ;
Droit de ne pas faire l’objet d’une décision fondée exclusivement sur un procédé automatisé ;
Droit de déterminer le sort des données après la mort ;
Droit de saisir l’autorité de contrôle compétente (article 77 du RGPD).
Pour exercer vos droits, veuillez adresser votre courrier à [Nom et adresse de l’entreprise] ou par mail à [Insérer l’adresse e-mail du Délégué à la protection des données]
Afin que le responsable du traitement des données puisse faire droit à sa demande, l’utilisateur peut être tenu de lui communiquer certaines informations telles que : ses noms et prénoms, son adresse e-mail ainsi que son numéro de compte, d’espace personnel ou d’abonné.
Consultez le site cnil.fr pour plus d’informations sur vos droits.`;

export const Politique = () => {
  return (
    <>
      <Header />
      <img src={img} alt="img-recette" className="img-recette"></img>
      <div className="mention-legal">
        <h2 className="title">{title}</h2>
        <p className="article">{article1}</p>
        <p className="article">{article2}</p>
        <p className="article">{article3}</p>
        <p className="article">{article5}</p>
        <p className="article">{article6}</p>
      </div>
      <Footer />
    </>
  );
};
