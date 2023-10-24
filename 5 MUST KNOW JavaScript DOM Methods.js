/*  ⁡⁢⁣⁢!  closest⁡
todo : The closest() method of the Element interface traverses the element and its parents 
todo : (heading toward the document root) until it finds a node that matches the specified CSS selector.
*/
document.querySelector(".item1").addEventListener("click", function (e) {
    console.log(e.target.closest(".list1"));
});

// !  append
const list = document.querySelector(".list2");
const item = document.createElement("li");
list.append(item, "text append 4"); // todo : append string

// !  insertAdjacentHTML -->  ⁡⁣⁣⁢𝗶𝗻𝘀𝗲𝗿𝘁𝗔𝗱𝗷𝗮𝗰𝗲𝗻𝘁𝗛𝗧𝗠𝗟(𝗽𝗼𝘀𝗶𝘁𝗶𝗼𝗻, 𝘁𝗲𝘅𝘁)⁡
// todo : The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
list.insertAdjacentHTML("afterend", "<p>My paragraph</p>");

// !  matches
console.log(list.matches("#list2")); // ⁡⁢⁢⁢true ⁡

// !  replaceWith
const myParagraph = document.querySelector("#myParagraph");
const myButton = document.createElement("button");
myButton.textContent = "A New Button";

myParagraph.replaceWith(myButton, "< this i a new button ");
