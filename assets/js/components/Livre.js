class Livre {
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
  }

  get categorie() {
    return this.#categorie;
  }

    get nouveaute() {
    return this.#nouveaute;
  }
}

export default Livre;
