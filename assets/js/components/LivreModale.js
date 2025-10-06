/**
 * Classe représentant la modale d’affichage des détails d’un livre.
 * Elle gère la création du HTML de la modale, son affichage et sa fermeture.
 */
class LivreModale {
  #conteneurHTML;
  #elementHTML;
  #boutonFermerHTML;
  #image;
  #titre;
  #auteur;
  #editeur;
  #pages;
  #description;

  /**
   * Crée une instance de la modale pour un livre donné.
   *
   * @param {HTMLElement} conteneurHTML
   * @param {string} image
   * @param {string} titre
   * @param {string} auteur
   * @param {string} editeur
   * @param {number} pages
   * @param {string} description
   *
   * @returns {void}
   */
  constructor(
    conteneurHTML,
    image,
    titre,
    auteur,
    editeur,
    pages,
    description
  ) {
    this.#conteneurHTML = conteneurHTML;
    this.#elementHTML;
    this.#image = image;
    this.#titre = titre;
    this.#auteur = auteur;
    this.#editeur = editeur;
    this.#pages = pages;
    this.#description = description;

    // Injection automatique du HTML de la modale lors de l’instanciation
    this._injecterHTML();
  }

  /**
   * Injecter dynamiquement le HTML de la modale dans le conteneur.
   * Créer les éléments visuels et relier le bouton de fermeture.
   */
  _injecterHTML() {
    let gabarit = `<div class="modale__conteneur invisible">
            <div class="modale__carte">
                <div class="modale__btn_fermer">X</div>
                <div class="modale__carte-detail">
                <img class="modale__image" src="${this.#image}" alt="image" />
                <section class="carte-information">
                <h2 class="modale__titre">Titre : ${this.#titre}</h2>
                <p class="modale__texte">Auteur : ${this.#auteur}</p>
                <p class="modale__texte">Editeur : ${this.#editeur}</p>
                <p class="modale__texte">Pages : ${this.#pages}</p>
                <p class="modale__texte">${this.#description}</p>
                </section>
                </div>
            </div>
        </div>`;
    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    this.#elementHTML = this.#conteneurHTML.lastElementChild;

    this.#boutonFermerHTML = this.#elementHTML.querySelector(
      ".modale__btn_fermer"
    );
    this.#boutonFermerHTML.addEventListener(
      "click",
      this.Onclickfermer.bind(this)
    );
  }

  /**
   * Afficher la modale à l’écran.
   * Supprimer la classe "invisible" et bloquer le défilement du body.
   */
  afficher() {
    this.#elementHTML.classList.remove("invisible");
    document.body.classList.add("modale-verrou");
  }

  /**
   * Fermer la modale lorsqu’on clique sur le bouton "X".
   * Ajouter la classe "invisible" et rétablir le défilement du body.
   */
  Onclickfermer() {
    this.#elementHTML.classList.add("invisible");
    document.body.classList.remove("modale-verrou");
  }
}

export default LivreModale;
