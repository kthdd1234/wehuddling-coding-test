const navItems = document.querySelectorAll('.nav-item');

const setFirstNavItem = () => {
  navItems[0].classList.add('highlight');
};

const handleNavItemChange = (event) => {
  let target = event.target;

  navItems.forEach((item) => {
    item === target
      ? item.classList.add('highlight')
      : item.classList.remove('highlight');
  });
};

setFirstNavItem();
document
  .querySelector('.nav-bar')
  .addEventListener('click', handleNavItemChange);
