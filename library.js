
function Library(libraryName) { //Defines the Library class
    this.name = libraryName;
    this.shelves = [];
}

function showLibrary(library) { //Reports the books list as objects
    var booksList = "";
    for (var i = 0; i < library.shelves.length; i++) {
        console.log(library.shelves[i]);
    }
}

function Shelf(section) { //Defines the Shelf class
    this.section = section;
    this.books = [];
}

function Book(title, author) { //Defines the Book class
    this.name = title;
    this.author = author;
}

function Enshelf(book, shelf) { //Puts book @book on shelf @shelf
    shelf.books.push(book);
}

function Unshelf(book, shelf) { //Removes book @book from shelf @shelf
    shelf.remove(books.indexOf(book));
}

//Test
iansLibrary = new Library("Ian's Public Library");

horror = new Shelf("Horror");
iansLibrary.shelves.push(horror);
reference = new Shelf("Reference");
iansLibrary.shelves.push(reference);

theShining = new Book("The Shining", "Stephen King");
enshelf(theShining, horror);
physics = new Book("Introductory Physics", "Richard Feynmann");
enshelf(physics, reference);

console.log(showLibrary(iansLibrary));

