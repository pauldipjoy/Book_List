
// Get the UI element-
let form = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');




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

    // constructor(){

// ....................

 // }


// add book list start here //


static addToBookList(book){

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
 static  clearAddbookField(){

document.querySelector('#title').value = '';
document.querySelector('#author').value= '';
document.querySelector('#isbn').value = '';

}

// clear books in table field  ends //






// Validation section start //


static showAlert(message , className){

    let div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    //console.log(div)
    let container = document.querySelector('.container');
    let form = document.querySelector('#book-form');
    container.insertBefore(div , form);


    setTimeout(function(){

        document.querySelector('.alert').remove();

    } , 2000);





}

// Validation section End //




// REMOVE BOOK //

static deleteFromBook(target){

    //console.log(target);

    if(target.hasAttribute('href')) {


        target.parentElement.parentElement.remove();

        UI.showAlert("Book remove!" , "success")
    }


}

// REMOVE BOOK ENDS //






} 




// ADD event Listener for form //

form.addEventListener('submit' ,  newBook);

// ADD event Listener for form ends //


// ADD event Listener for remove booklist//

bookList.addEventListener('click' , removeBook)

// ADD event Listener for remove booklist ends//








// Define function  for form //

function newBook(e) {

//console.log("hello book");

// from submit and infrom or value collect-
let title = document.querySelector('#title').value,
author = document.querySelector('#author').value,
isbn = document.querySelector('#isbn').value;


// let ui = new UI();


// validation check-
if(title === '' || author === '' || isbn === ''){

    // alert("All Fields")

    UI.showAlert("Please fill all the fields?" , "error");  // ui function two parameter

}

else {

    let book = new Book(title , author , isbn);
    //console.log(book);
    
    // let ui = new UI();
    
    UI.addToBookList(book);
    
    
    UI.clearAddbookField();

    UI.showAlert("Book added!" , "success"); 
    
    

}

// create new book from Book class object-
// let book = new Book(title , author , isbn);
// //console.log(book);

// let ui = new UI();

// ui.addToBookList(book);


// ui.clearAddbookField();



e.preventDefault();



}

// Define function  for form  ends here//







// Define function  for remove book list //

function removeBook(e){

    // let ui = new UI();
    UI.deleteFromBook(e.target);
    // UI.showAlert("Book remove!" , "success")

e.preventDefault();

}














