console.log("question 5 solution");

//document.getElementById("linklist").innerHTML += '<li id="business"><a href="https://www.csulb.edu/college-of-business">College of Business</a></li>';

const linklist = document.getElementById('linklist');
const isItem = document.getElementById("IS");
const businessItem = document.createElement("li");
businessItem.id = "business";
businessItem.innerHTML = '<li id = "business"><a href = "https://www.csulb.edu/college-of-business" > College of Business </a></li >';
linklist.insertBefore(businessItem, isItem);