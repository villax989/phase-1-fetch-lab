function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
      .then((resp) => resp.json())
      .then((json) => {
          renderBooks(json);
          return json; // Don't forget to return the data
      })
      .catch((error) => {
          console.error("Error fetching books:", error);
      });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});