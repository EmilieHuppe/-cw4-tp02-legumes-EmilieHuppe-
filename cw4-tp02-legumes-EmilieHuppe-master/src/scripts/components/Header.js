export default class Header {
  /**Construit la class Header
 */
  constructor(element) {
    //Chemain vers le header du site
    this.element = element;

    //Position du scroll dans la page
    this.scrollPosition = 0;

    //Pourcentage de la page où le header est visible
    this.scrollLimit=0.1;

    //Racourcie pour écrire des ligne de code
    this.html=document.documentElement;

    //Dernière position du scroll
    this.lastScrollPosition=0;

    //appel les méthodes d'initiasilation pour le menu destop et mobile
    this.init();
    this.initNavMobile();
  }

/**Ajoute une event listener sur la page du site 
 */
  init() {
    //Met un eventlistener sur la page pour écouter le scroll
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

/**Initialise le scroll actuel et précédant sur le site
 * @param {object} event
 */
  onScroll(event) {
    // Initialise la valeur du dernier scroll et du scroll 
    this.lastScrollPosition=this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    //Appel des methodes pour vérifier l'état du scroll
    this.setHeaderState();
    this.setDirectionState();
  }

/**Vérifie la hauteur du scroll pour déterminer si on doit cacher le menu
 *  ou le rendre visible.
 */
  setHeaderState() {
    //Contient la hautuer du site
    const scrollHeight=document.scrollingElement.scrollHeight;

    //Vérifier la hauteur du scroll. Si la valeur du scroll est plus grande
    // que le pourcentage du site dans le quelle on veut voir le menu on
    // ajoute la class 'header-is-hidden' dans le cas contraire on enlève
    // la classe.
    if(this.scrollPosition>scrollHeight*this.scrollLimit){
        this.html.classList.add('header-is-hidden');
    }else{
        this.html.classList.remove('header-is-hidden');
    }
  }


/**Vérifie si l'utilisateur scroll vers le haut ou vers le bas en utilisant
 *  la valeur du dernier scroll et du scroll. 
 */
  setDirectionState(){

    //Indique au site si l'utilisateur scroll vers le bas ou vers le haut en
    // ajoutent la classe'is-scrolling-up' ou 'is-scrolling-down'
    if(this.scrollPosition>=this.lastScrollPosition){
        this.html.classList.add('is-scrolling-down');
        this.html.classList.remove('is-scrolling-up');
    }else{
        this.html.classList.remove('is-scrolling-down');
        this.html.classList.add('is-scrolling-up');
    }
  }

/**Ajoute un eventListener au bouton de fermeture et d'ouverture du menu 
 */
  initNavMobile(){
    //Racoursie pour écrire une ligne de code
      const toggle=this.element.querySelector('.js-toggle');

      //Ajoute un eventListener pour vérifier si l'utilisateur a cliquer sur
      // le bouton du menu
      toggle.addEventListener('click',this.onToggleNav.bind(this));
  }

/**Indict au site de fermer ou ouvrir le menu
 */
  onToggleNav(){
    //toggle la classe 'nav-is-active' a chaque fois que l'utilisateur clique
    // sur le bouton du menu
    this.html.classList.toggle('nav-is-active');
  }
}
