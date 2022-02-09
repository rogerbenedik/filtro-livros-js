const books = [
  {
    title: "Dracula",
    author: "Bram Stoker",
    genero: "Romance"
  },
  {
    title: "Art of war",
    author: "Sun Tzu",
    genero: "Não ficção"
  },
  {
    title: "Frankeinstein",
    author: "Mary Shelley",
    genero: "Romance"
  },
  {
    title: "Mulheres",
    author: "Bukoski",
    genero: "Realismo sujo"
  },
  {
    title: "Turma da monica",
    author: "",
    genero: ""
  },
];

const listElement = document.querySelector("#book-list");

function renderAllBooks() {
  let booksHtml = '';

  books.forEach(function (book) {
    let author = "";

    if (book.author) {
      author = book.author;
    }

    booksHtml += "<div class='col-md-4'>" + book.title + "-" + book.author + "-" + book.genero + "</div>";
  });

  listElement.innerHTML = booksHtml;
}

// First render
renderAllBooks();

document.getElementById("filtro").addEventListener("keyup", function (event) {
  let booksHtmlANother = "";
  let typed = event.target.value;
  typed = typed.toLowerCase();

  let filteredBooks = [];

  if (typed == "") {
    renderAllBooks();
  } else {
    books.forEach(function (book) {
      const title = book.title.toLowerCase();

      if (title == typed) {
        filteredBooks.push(book);
      }
    });

    filteredBooks.forEach(function (book) {
      let author = "";

      if (book.author) {
        author = book.author;
      }

      booksHtmlANother += "<div class='col-md-4'>" + book.title + "-" + author + "</div>";
    });

    listElement.innerHTML = booksHtmlANother;
  }
});


// First tasks

// Nível easy
// 1 - Adicionar author, numero de paginas e genero em cada livro
// 2 - Fazer todos os dados aparecerem
// 3 - Deixar algum dos livros sem algum dado

// Nível Hard
// 4 - Criar uma função que quando chamada mostra todos os livros na tela sem filtro
