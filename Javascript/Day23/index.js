const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener(
  "click",
  (event) => {
    console.log("grandparent");
  },
  true
);

parent.addEventListener(
  "click",
  (event) => {
    console.log("parent");
  },
  true
);

child.addEventListener(
  "click",
  (event) => {
    console.log("child");
  },
  true
);
