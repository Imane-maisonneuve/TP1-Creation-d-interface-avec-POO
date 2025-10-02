import livres from "../data/livres.js";

import Livre from "../components/Livre.js";
import Filtre from "../components/Filtre.js";

class Application {
  conteneurHTML;
  #listeLivresHTML;
  listeLivres;
  #modale;
  #filtre;
  #panierAchat;

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

  set listeLivres(nouvelleListe) {
    this.listeLivres = nouvelleListe;
  }

  #recupererDonneesLivre() {
    livres.forEach(
      function (livre) {
        const nvLivre = new Livre(
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

  afficherListeLivres() {
    this.#listeLivresHTML.innerHTML = "";
    this.listeLivres.forEach(
      function (livre) {
        livre.injecterHTML();
      }.bind(this)
    );
  }

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
