import Utils from '../utilities/Utils';
export default class Modal {
  constructor(element) {
    this.element = element;
    this.modalId = this.element.dataset.modalId;

    this.init();
  }

  init() {
    this.element.addEventListener('click', this.open.bind(this));

    /*cette variable sera utile pour enlever le event listener sur le button close*/
    this.close = this.close.bind(this);
  }

  updateContent() {
    if (this.modalId == 'modal-wall') {
      this.modalElement.innerHTML = Utils.parseTemplate(
        this.modalElement.innerHTML,
        { title: this.element.dataset.modalTitle }
      );

      this.modalElement.scr==
    } else if(this.modalId == 'modal-carousel')
  }

  open(event) {
    event.preventDefault();

    this.appendModal();
  }

  close(event) {
    document.documentElement.classList.remove('modal-is-active');
    this.closeButton.removeEventListener('click', this.close);

    setTimeout(this.destroy.bind(this), 1000);
  }

  destroy() {
    this.modalElement.parentElement.removeChild(this.modalElement);
  }

  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true);

      this.updateContent();

      document.body.appendChild(this.modalElement);

      /*permet de faire jouer l'animation du modal en fessant réécrire la navigateur*/
      this.element.getBoundingClientRect();
      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('.js-close');
      this.closeButton.addEventListener('click', this.close.bind(this));
    } else {
      console.log(`le <template> avec le id ${this.modalId} n'existe pas`);
    }
  }
}
