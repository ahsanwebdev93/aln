const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', function () {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      navigation.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      navigation.classList.remove('is-open');
      menuToggle.focus();
    }
  });
}

document.querySelectorAll('.tabs button').forEach(function (button) {
  button.addEventListener('click', function () {
    const filter = this.dataset.f;

    document.querySelectorAll('.tabs button').forEach(function (tab) {
      tab.setAttribute('aria-pressed', tab === button ? 'true' : 'false');
    });

    document.querySelectorAll('.card').forEach(function (card) {
      const match = filter === 'all' || card.dataset.c === filter;
      card.hidden = !match;
    });
  });
});
