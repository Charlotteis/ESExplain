var heart = document.getElementById('js-emoji-heart');
var computer = document.getElementById('js-emoji-computer');
var book = document.getElementById('js-emoji-book');
var pencil = document.getElementById('js-emoji-pencil');

var articlesToggle = document.getElementById('js-articles-toggle');
var sidebarNav = document.getElementById('js-articles-nav');
var prevWindowWidth = document.getElementsByTagName('html')[0].offSetWidth;

heart.innerHTML = twemoji.parse('\uD83D\uDC96');
computer.innerHTML = twemoji.parse('\uD83D\uDCBB');
book.innerHTML = twemoji.parse('\uD83D\uDCD9');
pencil.innerHTML = twemoji.parse('\u270F');

articlesToggle.addEventListener('click', function(event) {
  event.preventDefault();

  if (sidebarNav.style.display === 'none' || sidebarNav.style.display === '') {
    sidebarNav.style.display = 'block';
    articlesToggle.textContent = 'Hide Articles';
  } else {
    sidebarNav.style.display = 'none';
    articlesToggle.textContent = 'Show Articles';
  }
});

window.addEventListener('resize', function() {
  // We need to check specifically if the width has changed, 
  // discovered this as Google Chrome on Android fires a resize event
  // when the navigation bar is hidden on scroll!
  if (document.getElementsByTagName('html')[0].offSetWidth !== prevWindowWidth) {
    if (window.innerWidth > 600) {
      sidebarNav.style.display = 'block';
    } else {
      sidebarNav.style.display = 'none';
      articlesToggle.textContent = 'Show Articles';
    }
  }
});
