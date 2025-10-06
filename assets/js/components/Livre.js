import LivreModale from "../components/LivreModale.js";

/**
 * Classe représentant un livre dans l’application.
 * Gèrer l’affichage de la carte du livre et l’ouverture de la modale détaillée.
 */
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

  /**
   * Créer une nouvelle instance de Livre et injecter son HTML dans le conteneur.
   *
   * @param {Object} application
   * @param {HTMLElement} conteneurHTML
   * @param {string} image
   * @param {string} titre
   * @param {string} auteur
   * @param {string} editeur
   * @param {number} pages
   * @param {string} description
   * @param {number} prix
   * @param {boolean} nouveaute
   * @param {string} categorie
   */
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

  /**
   * Injecter dynamiquement le HTML d’une carte de livre dans le conteneur.
   * Ajouter aussi un écouteur d’événement pour gérer le clic sur la carte.
   */
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

  /**
   * Gèrer le clic sur une carte de livre et ouvre la modale correspondante.
   */
  OnclickCarte() {
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
