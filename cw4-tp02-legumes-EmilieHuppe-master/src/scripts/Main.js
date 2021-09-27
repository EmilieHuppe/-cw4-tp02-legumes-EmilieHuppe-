import Factory from './Factory';
//ceci est un commentaire
class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    new Factory();

  }
}
new Main();
