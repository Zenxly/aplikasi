window.addEventListener('load', function () {
  var preloader = document.querySelector('.preloader');
  preloader.classList.add('fade-out');

  setTimeout(function () {
    preloader.style.display = 'none';
  }, 5000);
});
