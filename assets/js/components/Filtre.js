import filtre from "./Application.js";

class Filtre {
  #elementHTML;
  #application;
  #listeLivreClone;

  constructor(application) {
    this.#application = application;

    this.#elementHTML = document.querySelector("[data-filtres]");
    this.#elementHTML.addEventListener("click", this.onClicFiltre.bind(this));
  }

  onClicFiltre(evenement) {
    const declencheur = evenement.target.closest("[data-categorie]");
    const listeLivreClone = [...this.#application.listeLivres];

    let categorie = declencheur.dataset.categorie;

    this.filtrer(categorie, listeLivreClone);
  }

  filtrer(categorie, listeLivres) {
    if (categorie === "Tous") {
      this.#application.afficherListeLivres();
    } else {
      const nouvelleListe = listeLivres.filter(function (livre) {
        if (categorie === "nouveaute") {
          return livre.nouveaute === true;
        } else {
          return livre.categorie === categorie;
        }
      });
      this.#application.afficherListeFiltre(nouvelleListe);
    }
  }
}

export default Filtre;
