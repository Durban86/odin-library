const form = document.getElementById('new-book-form');

let myLibrary = [{
    title: 'Ready Player One',
    author: 'Ernest Cline',
    pages: 374,
    read: true
},
{
    title: 'Ready Player Two',
    author: 'Ernest Cline',
    pages: 366,
    read: false
}
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(e) {
    e.preventDefault();
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value 
    let pages = document.getElementById('pages').value 
    let read = document.getElementById('read').value
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    form.reset();
}

const addBtn = document.getElementById('add')
addBtn.addEventListener('click', addBookToLibrary)
// function displayBooks() {
//     for (i=0; i<myLibrary.length; i++){
//         titleCell.innerText = myLibrary[i].title;
//         authorCell.innerText = myLibrary[i].author;
//         pagesCell.innerText = myLibrary[i].pages;
//         readCell.innerText = myLibrary[i].read;
//     }
// }