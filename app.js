const ADD_BTN = document.querySelector('#add');
const RADIO_BTN = document.querySelectorAll('.read');
const GRID_CONTAINER = document.querySelector('.grid-container')

// Get the modal and buttons
var modal = document.getElementById('myModal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

// Open the modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close the modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const myLibrary = [];

ADD_BTN.addEventListener('click',addBookToLibrary);
function Book(author,title,pages,read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(){
    if(document.querySelector('#author').value == '' ||
       document.querySelector('#title').value == '' || 
       document.querySelector('#pages').value == ''){
        alert("Fill the form");
        return;
    }
    modal.style.display = 'none';
    let author = document.querySelector('#author').value;
    let title = document.querySelector('#title').value;
    let pages = document.querySelector('#pages').value;
    let read;
    RADIO_BTN.forEach(element => {
        if(element.checked){
            read = element.value;
        }
    });
    myLibrary.push(new Book(author,title,pages,read));
    removeCard();
    displayCard();
}
function displayCard(){
    let index = 0;
    for(var book of myLibrary){
        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<h2>${book.author}</h2>
                            <h2>"${book.title}"</h2>
                            <h2>${book.pages} pages</h2>
                            <h2>Read : ${book.read}</h2>`;
        newDiv.className = 'card';
        newDiv.id = index;
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.id = index;
        deleteBtn.className = "delete";
        GRID_CONTAINER.appendChild(newDiv);
        newDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener('click',deleteCard);
        index++;
    }
}
function removeCard(){
    GRID_CONTAINER.innerHTML = ``;
}
function deleteCard(e){
    myLibrary.splice(e.target.id,1);
    removeCard();
    displayCard();
}


