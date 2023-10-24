// !  scrollIntoView
// todo : The scrollIntoView() method scrolls an element into the visible area of the browser window.
const someParagraph = document.querySelector("#important-p");
someParagraph.scrollIntoView({
    behavior: "smooth",
});

// !  contains
// todo : The contains() method returns true if a node is a descendant of a node.
const someContainer = document.querySelector("#container-contain ");
const someOtherComponent = document.querySelector("#component");
console.log(someContainer.contains(someOtherComponent));

// !  cloneNode
// todo : The cloneNode() method creates a copy of a node, and returns the clone.
const list = document.querySelector("#list2");
const listItem = document.querySelector(".item1");
// todo : Set the deep parameter to true if you also want to clone descendants (children).
list.appendChild(listItem.cloneNode(true));

// !  after
const myParagraph = document.querySelector("#myParagraph");
const myBtn = document.querySelector(".btn");
myParagraph.after(myBtn, "< new button");

// !  remove
