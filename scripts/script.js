const urlPage = window.location.pathname.toString();
console.log(urlPage);

const activePage = document.querySelector('.header-container');

const headingArr = [0,1,2];

console.log(activePage.children.item(1).pathname.toString());

headingArr.forEach((val) => {
   if (urlPage === activePage.children.item(val).pathname.toString()) {
       activePage.children.item(val).classList.add('current-link');
   }
    });