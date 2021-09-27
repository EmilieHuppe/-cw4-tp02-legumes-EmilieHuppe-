//estv la facon la plus optimiser de travailler a vec le scroll en date du 2021  
export default class Scrolly {
  constructor(element) {
    this.element = element;
    this.options = {
      rootMargin: '0px 0px 0px 0px',
    };
    this.init();
  }

  init() {
    console.log('Scrolly');
    this.observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    );

    const items = this.element.querySelectorAll('[data-scrolly]');

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      this.observer.observe(item);
    }
  }

  watch(entries) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('is-active');
        this.observer.unobserve(target);//dit a l'observer d'Arrète d'observer les is-active
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
