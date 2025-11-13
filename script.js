// Selecting popupbox, overlay, and button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

// Show popup
addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting cancel button
var cancelbutton = document.getElementById("cancel-popup");
cancelbutton.addEventListener("click", function(event) {
    event.preventDefault(); // prevents default behavior if it's a form button
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});



//selecting container,add-book,add-book-title,add-book-description

var container = document.querySelector(".container");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");
var addbook = document.getElementById("add-book"); 

addbook.addEventListener("click",function()
{   
    event.preventDefault()
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML= `<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
var searchbar = document.getElementById("search-bar");

searchbar.addEventListener("input", function() {
    var filter = searchbar.value.toLowerCase(); // get input text

    // Select all book cards
    var books = document.querySelectorAll(".book-container");

    books.forEach(function(book) {
        var title = book.querySelector("h2").textContent.toLowerCase();
        var author = book.querySelector("h5").textContent.toLowerCase();

        // Show card if title or author includes search text
        if (title.includes(filter) || author.includes(filter)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});
