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
    //debugger;
    let categorie = declencheur.dataset.categorie;
    //console.log(categorie);

    this.filtrer(categorie, listeLivreClone);

    // if (declencheur !== null) {
    //   if (declencheur.dataset.categorie === "Tous") {
    //     this.#application.afficherListeLivres();
    //   } else if (declencheur.dataset.categorie === "Nouveautes") {
    //     const listeNouveautes = listeLivreClone.filter(function (livre) {
    //       return livre.nouveaute === true;
    //     });
    //     this.#application.afficherListeFiltre(listeNouveautes);
    //   } else if (declencheur.dataset.categorie === "Litterature") {
    //     const listeLitterature = listeLivreClone.filter(function (livre) {
    //       return livre.categorie === "Littérature";
    //     });
    //     this.#application.afficherListeFiltre(listeLitterature);
    //   } else if (declencheur.dataset.categorie === "Art-de-vivre") {
    //     const listeArtDeVivre = listeLivreClone.filter(function (livre) {
    //       return livre.categorie === "Art de vivre";
    //     });
    //     this.#application.afficherListeFiltre(listeArtDeVivre);
    //   } else if (declencheur.dataset.categorie === "BD-Jeunesse-Humour") {
    //     const listeBDJeunesseHumour = listeLivreClone.filter(function (livre) {
    //       return livre.categorie === "BD, Jeunesse, Humour";
    //     });
    //     this.#application.afficherListeFiltre(listeBDJeunesseHumour);
    //   } else if (declencheur.dataset.categorie === "Culture-et-societe") {
    //     const listeCultureEtSociete = listeLivreClone.filter(function (livre) {
    //       return livre.categorie === "Culture et société";
    //     });
    //     this.#application.afficherListeFiltre(listeCultureEtSociete);
    //   } else if (declencheur.dataset.categorie === "Loisirs-Tourisme-Nature") {
    //     const listeLoisirsTourismeNature = listeLivreClone.filter(function (
    //       livre
    //     ) {
    //       return livre.categorie === "Loisirs, Tourisme, Nature";
    //     });
    //     this.#application.afficherListeFiltre(listeLoisirsTourismeNature);
    //   } else if (declencheur.dataset.categorie === "Savoir-et-science") {
    //     const listeSavoirEtScience = listeLivreClone.filter(function (livre) {
    //       return livre.categorie === "Savoir et science";
    //     });
    //     this.#application.afficherListeFiltre(listeSavoirEtScience);
    //   }
    // }
  }

  filtrer(categorie, listeLivres) {
    console.log(categorie);
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
