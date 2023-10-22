// ! 1. Destructuring with Parameters
btn.addEventListener("click", ({ target }) => {
    // todo : trong đó target là phần tử đã gây ra sự kiện "click"
    if (target.className == "some-class") {
        // todo : do something
    }
});
// ! 2. Deep Copy with JSON
const person = {
    name: "Sang",
    age: 20,
    skills: ["html", "css", "js", "reactJS"],
};
// todo : sao chép mảng skills mà không thay đổi tham chiếu của đối tượng ban đầu
// todo : bạn tạo một bản sao nơi tất cả các giá trị và cấu trúc đều được sao chép, không tham chiếu đến đối tượng ban đầu.
// todo : Bản sao này là một sao chép độc lập của đối tượng person, vì vậy thay đổi trong personCopy sẽ không ảnh hưởng đến person, và ngược lại.
const personCopy = JSON.parse(JSON.stringify(person));
personCopy.skills == person.skills; // ! false

// ! 3. Easy Defaults with OR
let username = getUserName();
if (username === null) {
    username = "dom";
}
// todo : Khắc phục
const newUserName = getUserName() || "dom";
// ! 4. Advanced Array Searching
const occupations = ["Lawyer", "Doctor", " Programer", "Chef", "Store Manager"];
const result = occupations.find((o) => o.startsWith("C"));
// ! 5. Remove Array Duplicates
const numbers = [1, 1, 1, 1, 2, 2, 4, 6, 2, 22];
const withoutDuplicates = new Set(numbers);
// ! 6. Self-Invoking Functions
const someComplexValue = (() => {
    console.log("Hello world");
})();
// ! 7. Array Copying with Spread
const numbers = [1, 2, 43, 3];
const numbersCopy = [...numbers];
