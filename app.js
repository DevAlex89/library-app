var library = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const status = document.querySelector("#status");
const list = document.querySelector("#book-list");

const btn = document.querySelector("#submit");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  render();
  addBook();
  clearForm();
});

class Book {
  constructor(title, author, pages, status) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.status = status);
  }
}

function saveLocally() {
  localStorage.setItem("library", JSON.stringify(library));
}

function checkLocal() {
  if (localStorage.getItem("library")) {
    library = JSON.parse(localStorage.getItem("library"));
  } else {
    library = [];
  }
}

function addBook() {
  if (
    title.value.length === 0 ||
    author.value.length === 0 ||
    pages.value.length === 0
  ) {
    alert("Please, fill in the fields!");
    return;
  }
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    status.value
  );
  library.push(newBook);
  saveLocally();
}

function render() {
  checkLocal()
  list.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    const row = list.insertRow();
    const tdTitle = row.insertCell();
    let titleData = library[i].title;
    tdTitle.append(titleData);

    const tdAuthor = row.insertCell();
    let authorData = library[i].author;
    tdAuthor.append(authorData);

    const tdPages = row.insertCell();
    let pagesData = library[i].pages;
    tdPages.append(pagesData);

    const tdStatus = row.insertCell();
    let statusData = library[i].status;
    tdStatus.append(statusData);
  }
}
function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
}
render();
