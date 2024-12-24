// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const yellow = document.getElementById("yellow");
// const pink = document.getElementById("pink");
// red.addEventListener("click", () => {
//   const body = document.body;
//   body.style.backgroundColor = "red";
// });

// blue.addEventListener("click", () => {
//   const body = document.body;
//   body.style.backgroundColor = "blue";
// });

// green.addEventListener("click", () => {
//   const body = document.body;
//   body.style.backgroundColor = "green";
// });
// yellow.addEventListener("click", () => {
//   const body = document.body;
//   body.style.backgroundColor = "yellow";
// });

// pink.addEventListener("click", () => {
//   const body = document.body;
//   body.style.backgroundColor = "pink";
// });

//optimized code
const buttons = document.querySelectorAll("button"); //get access to all buttons

//iterate overeach button
// buttons.forEach((button) => {
//   //apply evenlistener on each button
//   button.addEventListener("click", () => {
//     const body = document.body;
//     body.style.backgroundColor = button.id; //button.id will give the id as a color
//   });
// });

//more optimized and advance code

const root = document.getElementById("root");

root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName == "BUTTON")
    document.body.style.backgroundColor = event.target.id;
});
