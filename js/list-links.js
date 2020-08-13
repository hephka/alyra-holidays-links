"use strict";
class ListLinks {
  constructor(container, defaultList) {
    this.container = container;
    this.list = JSON.parse(localStorage.getItem("listLinks")) || defaultList;
  }
  init() {
    this.render();
  }

  pushEl(el) {
    /* @todo : remplacer array vide [] dans const urls = [], par l'array qui contient tous les urls
    trouvés dans this.list */
    const urls = [];

    if (!urls.includes(el.url)) {
      // si el.url n'est pas dans la liste des urls
      // je l'ajoute
      this.list.push(el);
      // et j'appelle la méthode refresh
      this.refresh();
    }
  }
  remove(el) {
    const i = this.list.findIndex((item) => item === el); // <- ce code trouve index de l'élément récherché
    this.list.splice(index, 1); // <- ce code enleve l'élément avec index i de list
    // @todo : appeller la méthode refresh
    this.refresh();
  }
  refresh() {
    // @todo: appele la méthode addToLocalStorage
    this.addToLocalStorage();
    // @todo: appele la méthode render
    this.render();
  }
  addToLocalStorage() {
    /*
     le code ci-dessous convertis l'array list (array qui contients des objet) en format JSON afin de la
     sauvegarder en localStorage dans la clé "listLinks"
    */
    localStorage.setItem("listLinks", JSON.stringify(this.list));
  }
  render() {
    const ulEl = this.addUl();
    this.container.innerHTML = "";
    // @todo : attache ulEl à la fin de container
    this.container.append(ulEl);
  }

  addUl() {
    const ulEl = this.createUlElement();
    for (let el of this.list) {
      const li = this.addLi(el);
      // @todo : append chaque li à élément ulEl
      ulEl.append(li);
    }
    // @todo : retourner ulEl
    return ulEl;
  }

  addLi(el) {
    const liEl = this.createLiElement();
    liEl.append(this.addTitle(el));
    liEl.append(this.addDescription(el));
    liEl.append(this.addLink(el));
    liEl.append(this.addButton(el));
    // @todo : mettre en place le reste de son contentu en utilisant les méthodes
    //  addDescription(el)
    //  addLink(el)
    //  addButton(el)
    //  retourner liEl
    return liEl;
  }

  createUlElement() {
    const ul = document.createElement("ul");
    // @todo : ajouter des classes row list-unstyled mt-4
    ul.classList.add("row", "list-unstyled", "mt-4");
    return ul;
  }

  createLiElement() {
    const el = document.createElement("li");
    // @todo : ajouter des classes à liEl border shadow-sm mb-3 p-2
    el.classList.add("border", "shadow-sm", "mb-3", "p-2");
    return el;
  }

  createTitleElement() {
    const el = document.createElement("h3");
    el.classList.add("h6", "mb-0");
    return el;
  }

  createDescriptionElement() {
    const el = document.createElement("p");
    return el;
  }

  createLinkElement() {
    const el = document.createElement("a");
    el.classList.add("btn-sm", "btn-ouline-warning", "mr-2");
    return el;
  }

  createButtonElement() {
    const el = document.createElement("button");
    // @todo : ajouter des classes btn btn-warning btn-sm
    el.classList.add("btn", "btn-warning", "btn-sm");
  }

  addTitle(el) {
    const titleEl = this.createTitleElement();
    titleEl.textContent = el.title;
    // @todo : retourner le markup pour le titre (h3.h6.mb-0), <h3 class="h6 mb-0">Le titre</h3>
    return titleEl;
  }

  addDescription(el) {
    // @todo : retourner le markup pour la description, <p>Voici la description</p>
    const descriptionEl = this.createDescriptionElement();
    return descriptionEl;
  }

  addLink(el) {
    /* @todo : retourner le markup pour le lien vers le ressource a.btn.btn-sm.btn-ouline-warning.mr-2 
    avec le texte visitez le lien */
    const linkEl = this.createLinkElement();
    linkEl.textContent = "Visiter le lien";
    linkEl.href = el.url;
    return linkEl;
  }

  addButton(el) {
    // @todo : mettre le texte "Supprimer le lien"
    const buttonEl = this.createButtonElement();
    // @todo : ajouter un eventListener qui écoute pour 'click' qui déclanchera la méthode remove
    // @todo : retourner buttonEl
    return buttonEl;
  }
}
