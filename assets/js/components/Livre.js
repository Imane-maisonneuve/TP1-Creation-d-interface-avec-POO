import LivreModale from "../components/LivreModale.js";
import Filtre from "../components/LivreModale.js";
class Livre {
  #application;
  #conteneurHTML;
  #elementHTML;
  #image;
  #titre;
  #auteur;
  #editeur;
  #pages;
  #description;
  #prix;
  #nouveaute;
  #categorie;

  constructor(
    application,
    conteneurHTML,
    image,
    titre,
    auteur,
    editeur,
    pages,
    description,
    prix,
    nouveaute,
    categorie
  ) {
    this.#application = application;
    this.#conteneurHTML = conteneurHTML;
    this.#image = image;
    this.#titre = titre;
    this.#auteur = auteur;
    this.#editeur = editeur;
    this.#pages = pages;
    this.#description = description;
    this.#prix = prix;
    this.#nouveaute = nouveaute;
    this.#categorie = categorie;
    this.injecterHTML();
  }

  get categorie() {
    return this.#categorie;
  }

  get nouveaute() {
    return this.#nouveaute;
  }

  injecterHTML() {
    const gabarit = `<div class="carte" data-livre>
        <img src="${this.#image}" alt="image" />
        <div>
        <p>${this.#titre}</p>
        <div class="bloc-prix">
            <h3>${this.#prix} $</h3>
            <div class="bouton">Ajouter</div>
        </div>
        </div>
    </div>`;

    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);

    this.#elementHTML = this.#conteneurHTML.lastElementChild;
    this.#elementHTML.addEventListener("click", this.OnclickCarte.bind(this));
  }

  OnclickCarte(evenement) {
    this.#application.LivreModale = new LivreModale(
      this.#application.conteneurHTML,
      this.#image,
      this.#titre,
      this.#auteur,
      this.#editeur,
      this.#pages,
      this.#description
    );

    this.#application.LivreModale.afficher();
  }
}

export default Livre;
