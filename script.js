const form = document.getElementById('new-book-form');
const tableBody = document.getElementById('table-body');

let myLibrary = [];

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
    let read = document.getElementById('read').checked
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    form.reset();
    displayLibrary();
}

const addBtn = document.getElementById('add')
addBtn.addEventListener('click', addBookToLibrary)

function displayLibrary() {
    tableBody.textContent = "";
    for (i=0; i < myLibrary.length; i++) {
        let newRow = tableBody.insertRow(-1);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);
        let titleCell = document.createTextNode(myLibrary[i].title)
        let authorCell = document.createTextNode(myLibrary[i].author)
        let pagesCell = document.createTextNode(myLibrary[i].pages)
        let readCell = document.createTextNode(myLibrary[i].read)
        let delCell = document.createElement('button')
        cell1.appendChild(titleCell);
        cell2.appendChild(authorCell);
        cell3.appendChild(pagesCell);
        cell4.appendChild(readCell);
        cell5.innerHTML = `
            <button class="deleteBtn" onclick="deleteBook(${i})">Delete</button>`

    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}