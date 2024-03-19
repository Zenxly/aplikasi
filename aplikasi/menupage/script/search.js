document.getElementById('searchButton').addEventListener('click', function () {
  let searchInput = document.getElementById('searchInput').value.toLowerCase();
  let items = document.getElementsByTagName('li');
  let link = document.getElementById('not');

  for (let i = 0; i < items.length; i++) {
    let itemText = items[i].textContent;
    if (itemText.toLowerCase().indexOf(searchInput) !== -1) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
      link.style.display = 'flex';
    }
  }
});
