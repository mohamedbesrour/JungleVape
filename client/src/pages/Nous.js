import React from "react";
import "../style/nous.css";
import decobord1 from "../assets/decobord1.jpg";
import decobord2 from "../assets/decobord2.jpg";

import Favori from '../component/favori';
// import Bord1 from '../assets/decobord1.jpg'<Bord1/>
export default function Nous() {
  return (
    <>
    
      {/* <img
        src={decobord1}
        alt="bordure-decorative-Gauche"
        className="decorative-image left-image"
      /> */}
      <div className="elementor-widget-wrap">
        <div className="corp">
          <h2 className="titre">QUI SOMMES-NOUS ?</h2>
          <p className="texte">
            Jungle Vape est une entreprise française passionnée par la création
            d’e-liquides d’exception et les avancées technologiques. Née de
            l’amour pour le vapotage et de l’expertise en matière d’arômes,
            notre mission est de vous offrir une expérience gustative
            incomparable en combinant des ingrédients de qualité, des packagings
            innovants et une expérience utilisateur exceptionnelle, le tout à un
            prix compétitif. Nous sommes également fiers d’accepter les
            paiements en cryptomonnaie et d’explorer de nouvelles opportunités
            pour offrir encore plus de choix à nos clients à l’avenir.
          </p>
          <h2 className="titre">À PROPOS DE NOUS</h2>
          <p className="texte">
            Fondée en 2022, Jungle Vape est le fruit d’une collaboration entre
            des passionnés du vapotage, des experts en arômes et des adeptes des
            technologies innovantes. Conscients de l’importance d’offrir des
            saveurs uniques et de qualité à un prix abordable, notre équipe
            s’est donnée pour objectif de créer des e-liquides qui se démarquent
            par leur créativité, leur excellence et leur rapport qualité-prix.
          </p>
          <h2 className="titre">NOTRE ENGAGEMENT</h2>
          <p className="texte">
            Chez Jungle Vape, nous nous engageons à respecter les normes de
            qualité les plus strictes dans la fabrication de nos e-liquides.
            Chacun de nos produits est fabriqué en France avec des ingrédients
            de qualité supérieure, garantissant une expérience de vapotage
            unique et satisfaisante. Notre souci du détail s’étend également à
            nos packagings et autres éléments, qui sont conçus pour offrir une
            expérience utilisateur optimale. Notre équipe talentueuse et dévouée
            travaille sans relâche pour élaborer des saveurs uniques et
            audacieuses, tout en maintenant un engagement fort envers
            l’excellence, l’innovation et la satisfaction du client. Grâce à
            notre passion et notre détermination, nous avons développé notre
            première gamme, Collection Wild, qui vous invite à explorer les
            saveurs sauvages inspirées par les félins emblématiques du monde,
            sans faire de compromis sur la qualité ou le prix.
          </p>
          <h2 className="titre">NOTRE VISION</h2>
          <p className="texte">
            Notre vision est de devenir un leader reconnu dans l’industrie des
            e-liquides en proposant des saveurs innovantes et en offrant une
            expérience client exceptionnelle à un prix abordable. Nous nous
            efforçons de créer des produits qui répondent aux attentes des
            vapoteurs les plus exigeants et de développer une communauté de
            passionnés qui partagent notre amour pour les saveurs et les
            expériences uniques. En embrassant l’ère numérique et les
            cryptomonnaies, nous restons à la pointe de l’innovation et nous
            préparons à dévoiler de nouvelles surprises pour l’avenir. Nous vous
            invitons à découvrir notre Collection Wild et à partager notre
            passion pour les e-liquides d’exception. Si vous avez des questions
            ou besoin d’aide, n’hésitez pas à nous contacter. Notre équipe
            d’experts est là pour vous assister et répondre à vos besoins.
          </p>
        </div>
      </div>

      {/* <img
        src={decobord2}
        alt="bordure-decorative-Droite"
        className="decorative-image right-image"
      /> */}

<Favori/>
    </>
  );
}
