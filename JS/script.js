
// Get the UI element-
let form = document.querySelector('#book-form');




// Book Class-
class Book {

constructor( title , author , isbn){

this.title = title;
this.author = author;
this.isbn = isbn;

}
}

// UI class-
 class UI {

    constructor(){




    }

  add__ToBook__List(book){

    //console.log(book);

    let list = document.querySelector('#book-list');

    let row =document.createElement('tr');



    row.innerHTML = `
    
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href ="#" class = "delete"> X </a> </td>

`
//console.log(row);

// append in list-

list.appendChild(row);



  }

// clear books in table field -
  clear__add__book__fields(){

  document.querySelector('#title').value = '';
  document.querySelector('#author').value= '';
  document.querySelector('#isbn').value = '';

  }

 } 



// ADD event Listener-
form.addEventListener('submit' ,  newBook);



// Define function-
function newBook(e) {

//console.log("hello book");

// from submit and infrom or value collect-
let title = document.querySelector('#title').value,
 author = document.querySelector('#author').value,
 isbn = document.querySelector('#isbn').value;



// create new book from Book class object-
let book = new Book(title , author , isbn);
//console.log(book);

let ui = new UI();

ui.add__ToBook__List(book);


ui.clear__add__book__fields();



e.preventDefault();

}

