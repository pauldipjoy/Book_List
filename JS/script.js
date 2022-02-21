
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


// add book list start here //


addToBookList(book){

    //console.log(book);

    let list = document.querySelector('#book-list');

    let row =document.createElement('tr');



    row.innerHTML = 
    
    `<td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td> <a href ="#" class = "delete"> X </a> </td>`



//console.log(row);


// append in list-
list.appendChild(row);

}

// add book list ends here //






// clear books in table field -
clearAddbookField(){

document.querySelector('#title').value = '';
document.querySelector('#author').value= '';
document.querySelector('#isbn').value = '';

}

// clear books in table field  ends //






// Validation section start //


showAlert(message , className){

    let div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector('.container');
    let form = document.querySelector('#book-form');
    container.insertBefore(div , form);


    setTimeout(function(){

        document.querySelector('.alert').remove();

    } , 2000);





}

// Validation section End //



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


let ui = new UI();


// validation check-
if(title === '' || author === '' || isbn === ''){

    // alert("All Fields")

    ui.showAlert("Please fill all the fields!" , "error");  // ui function two parameter

}

else {

    let book = new Book(title , author , isbn);
    //console.log(book);
    
    // let ui = new UI();
    
    ui.addToBookList(book);
    
    
    ui.clearAddbookField();

    ui.showAlert("Book added" , "success"); 
    
    

}













// create new book from Book class object-
// let book = new Book(title , author , isbn);
// //console.log(book);

// let ui = new UI();

// ui.addToBookList(book);


// ui.clearAddbookField();



e.preventDefault();



}

