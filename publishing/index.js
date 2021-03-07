const navItems = document.querySelectorAll('.nav-item');
const highlight = '#60a9ed';

const setFirstNavItem = () => {
  navItems[0].style.color = highlight;
  navItems[0].style.borderBottom = `2px solid ${highlight}`;
};

const handleNavItemChange = (event) => {
  let target = event.target;

  navItems.forEach((item) => {
    if (item === target) {
      item.style.color = highlight;
      item.style.borderBottom = `2px solid ${highlight}`;
    } else {
      item.style.color = 'rgb(80, 104, 125)';
      item.style.borderBottom = `none`;
    }
  });
};

setFirstNavItem();
document
  .querySelector('.nav-bar')
  .addEventListener('click', handleNavItemChange);
