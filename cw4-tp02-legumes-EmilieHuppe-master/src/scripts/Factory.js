import Carousel from './components/Carousel';
import Header from './components/Header';
import Modal from './components/Modal';
import Scrolly from './components/Scrolly';

export default class Factory {
  constructor() {
    this.componentList = {
      Carousel,
      Header,
      Modal,
      Scrolly,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}