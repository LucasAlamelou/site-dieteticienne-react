import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Main.module.css';
import background from '../../Image/background.jpeg';
import image from '../../Image/photo2.jpeg';

const Main = () => {
  return (
    <main id="main">
      <img src={background} className={styled.Image} alt="back-main"></img>
      <div className={styled.MainDiv1}>
        <section className={styled.MainDivSection1}>
          <div style={{ backgroundImage: `url(${image})` }} className={styled.Image2}></div>
        </section>
        <section className={styled.MainDivSection2} id="presentation-main">
          <div className={styled.MainDivSection2Interieur}>
            <h3>Présentation :</h3>
            <p>
              Vous cherchez une diététicienne qui peut vous aider à atteindre vos objectifs de
              santé? Cherchez pas plus loin! Mon site Web fournit des informations sur des recettes
              qui sont bien équipés pour fournir les meilleurs conseils et orientations pour vous
              aider à atteindre vos objectifs de santé souhaités. Nous avons un large éventail de
              recette, régimes, du conseil en nutrition à l'élaboration de plans de repas.
            </p>
          </div>
        </section>
      </div>
      <div className={styled.MainDiv2} id="adhesion-main">
        <section className={styled.MainDivSection2}>
          <div className={styled.MainDivSection2Interieur}>
            <h3>Adhésion : </h3>
            <p>
              Vous cherchez un moyen de rester en bonne santé et d'atteindre vos objectifs de
              fitness ? Rejoignez notre programme dès aujourd'hui et accédez à notre diététicienne
              certifiée qui vous fournira des plans de nutrition personnalisés et des conseils
              adaptés à vos besoins individuels. Avec notre programme, vous pourrez atteindre vos
              objectifs de perte de poids en un rien de temps !
            </p>
            <Link to="/contact" className="lien">
              Nous rejoindre
            </Link>
          </div>
        </section>
        <section className={styled.MainDivSection1} id="recette-main">
          <div className={styled.MainDivSection2Interieur}>
            <h3>Mes Recettes : </h3>
            <p>
              Je crée des recettes personnalisées adaptées à vos besoins nutritionnels et à votre
              mode de vie. Que vous recherchiez des options à faible teneur en glucides,
              végétaliennes ou sans gluten, notre équipe d'experts créera le plan de repas parfait
              pour vous. Alors n'hésitez plus et découvrez les délicieuses possibilités de cuisiner
              avec Découvrez mes recettes !
            </p>
            <Link to="/recettes" className="lien">
              Voir les recettes
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
