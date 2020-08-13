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
    console.log(this.list);
    const urls = this.list.map((el) => el.url);
    console.log(urls);

    if (!urls.includes(el.url)) {
      // si el.url n'est pas dans la liste des urls
      // je l'ajoute
      this.list.push(el);
      // et j'appelle la méthode refresh
      this.refresh();
    } else {
      alert("Ce lien est déjà inclu");
    }
  }
  remove(el) {
    const i = this.list.findIndex((item) => item === el); // <- ce code trouve index de l'élément récherché
    // i = 0 si je click sur le premier élément
    this.list.splice(i, 1); // <- ce code enleve l'élément avec index i de list
    console.log(this.list);
    // @todo : appeller la méthode refresh
    this.refresh();
  }
  refresh() {
    // @todo: appele la méthode addToLocalStorage
    // @todo: appele la méthode render
    this.addToLocalStorage();
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
    // @todo : ajouter des classes btn btn-warning btn-sm
    const el = document.createElement("button");
    el.type = "button";
    el.classList.add("btn", "btn-warning", "btn-sm");
    return el;
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
    descriptionEl.textContent = el.description;
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
    const buttonEl = this.createButtonElement();
    buttonEl.textContent = "Supprimer le lien";
    buttonEl.addEventListener("click", () => {
      this.remove(el);
    });
    // @todo : mettre le texte "Supprimer le lien"
    // @todo : ajouter un eventListener qui écoute pour 'click' qui déclanchera la méthode remove
    // @todo : retourner buttonEl
    return buttonEl;
  }
}
