// console.log("question 2 solution");
// const displayText400 = document.getElementsByClassName("400level");
// console.log(displayText400);

// for (i = 0; i <= displayText400.length; i++) {
//     console.log(displayText400[i].textContent);
// }

const displayText400 = () => {
    const level400Items = Array.from(document.getElementsByClassName("400level"));
    console.log(level400Items)
    level400Items.forEach(item => console.log(item.innerHTML));
}
displayText400();