import SideNav from './components/sideNav.js';

const app = {
  init: function() {
    const thisApp = this;

    thisApp.initSideNav();
  },

  initSideNav: function(){
    const thisSideNav = this;

    thisSideNav.sidenav = new SideNav();
  },
};

app.init();