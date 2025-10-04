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

    this._injecterHTML();
  }

  /**
   * Méthode "protégée" pour injecter le HTML de la modale dans le DOM
   * Crée un élément HTML pour la modale et l'ajoute au conteneur HTML
   * Ajoute un écouteur d'événement pour fermer la modale lorsqu'on clique sur le X
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
   * Méthode publique pour afficher la modale, peut être appelée de l'extérieur
   */
  afficher() {
    this.#elementHTML.classList.remove("invisible");
    document.body.classList.add("modale-verrou"); // Empêche le défilement de la page
  }

  /**
   * Méthode publique pour fermer la modale
   */
  Onclickfermer() {
    this.#elementHTML.classList.add("invisible");
    document.body.classList.remove("modale-verrou"); // Rétablit le défilement de la page
  }
}

export default LivreModale;
