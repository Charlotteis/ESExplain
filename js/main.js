var heart = document.getElementById('js-emoji-heart');
var computer = document.getElementById('js-emoji-computer');
var articlesToggle = document.getElementById('js-articles-toggle');
var sidebarNav = document.getElementById('js-articles-nav');

heart.innerHTML = twemoji.parse('\uD83D\uDC96');
computer.innerHTML = twemoji.parse('\uD83D\uDCBB');

articlesToggle.addEventListener('click', function(event) {
  event.preventDefault();

  if (sidebarNav.style.display === 'none' || sidebarNav.style.display === '') {
    sidebarNav.style.display = 'block';
    articlesToggle.textContent = 'Hide Articles List';
  } else {
    sidebarNav.style.display = 'none';
    articlesToggle.textContent = 'Show Articles List';
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 600) {
    sidebarNav.style.display = 'block';
  } else {
    sidebarNav.style.display = 'none';
    articlesToggle.textContent = 'Show Articles List';
  }
});
