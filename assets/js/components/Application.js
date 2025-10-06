import livres from "../data/livres.js";

import Livre from "../components/Livre.js";
import LivreModale from "../components/LivreModale.js";
import Filtre from "../components/Filtre.js";

class Application {
  conteneurHTML;
  #listeLivresHTML;
  listeLivres;
  modale;
  #filtre;

  /**
   * Initialiser l'application
   */
  constructor() {
    this.conteneurHTML = document.querySelector("[data-application]");

    this.#listeLivresHTML = this.conteneurHTML.querySelector(
      "[data-conteneur-livres]"
    );
    this.listeLivres = [];
    this.#recupererDonneesLivre();
    this.afficherListeLivres();
    this.#filtre = new Filtre(this);
  }

  /**
   * modifier la liste des livres
   * @param {Array} nouvelleListe - La nouvelle liste de livres à définir
   */
  set listeLivres(nouvelleListe) {
    this.listeLivres = nouvelleListe;
  }

  // Récupérer les données des livres
  #recupererDonneesLivre() {
    livres.forEach(
      function (livre) {
        const nvLivre = new Livre(
          this,
          this.#listeLivresHTML,
          livre.image,
          livre.titre,
          livre.auteur,
          livre.editeur,
          livre.pages,
          livre.description,
          livre.prix,
          livre.nouveaute,
          livre.categorie
        );
        this.listeLivres.push(nvLivre);
      }.bind(this)
    );
  }

  // Afficher la liste des livres
  afficherListeLivres() {
    this.#listeLivresHTML.innerHTML = "";
    this.listeLivres.forEach(
      function (livre) {
        livre.injecterHTML();
      }.bind(this)
    );
  }

  /**
   * Afficher la liste des filtres
   * @param {Array} listefiltre
   */
  afficherListeFiltre(listefiltre) {
    this.#listeLivresHTML.innerHTML = "";
    listefiltre.forEach(
      function (livre) {
        livre.injecterHTML();
      }.bind(this)
    );
  }
}
export default Application;
