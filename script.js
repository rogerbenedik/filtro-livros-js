const books = [
  {
    title: "Dracula",
    author: "tiago",
    genro: "horror",
  },
  {
    title: "Art of war",
  },
  {
    title: "Frankeinstein",
  },
  {
    title: "Bukowski",
  },
  {
    title: "Turma da monica",
    author: "ziraldo",
  },
];

const listElement = document.querySelector("#book-list");
console.log(listElement);
let booksHtml = "";

books.forEach(function (book) {
  let author = "";

  if (book.author) {
    author = book.author;
  }

  booksHtml += "<div>" + book.title + "-" + author + "</div>";
});

listElement.innerHTML = booksHtml;

// Até aqui foi a listagem

// Agora a filtragem

document.getElementById("filtro").addEventListener("keyup", function (event) {
  let booksHtmlANother = "";
  let typed = event.target.value;
  typed = typed.toLowerCase();

  let filteredBooks = [];

  if (typed == "") {
    let booksHtml = "";

    books.forEach(function (book) {
      let author = "";

      if (book.author) {
        author = book.author;
      }

      booksHtml += "<div>" + book.title + "-" + author + "</div>";
    });

    listElement.innerHTML = booksHtml;
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

      booksHtmlANother += "<div>" + book.title + "-" + author + "</div>";
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
