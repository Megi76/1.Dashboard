import {select} from '../settings.js';

class SideNav {
  constructor() {
    const thisSideNav = this;

    thisSideNav.render();
  }
  render() {
    const hamburger = document.querySelector(select.components.sideNav.hamburger);
    const sideNav = document.querySelector(select.components.sideNav.sideNav);
    const topBar = document.querySelector(select.components.topBar.topBar);

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 820) {
        sideNav.classList.add('side-nav-active');
        topBar.classList.add('top-bar-active');
        hamburger.addEventListener('click', handleClick);
      } else {
        sideNav.classList.remove('side-nav-active');
        topBar.classList.remove('top-bar-active');
        topBar.classList.remove('nav-list-top-active-in');
      }
    });

    const handleClick = () => {
      console.log('clicked');
      sideNav.classList.toggle('side-nav-active');
    };
  }
}

export default SideNav;