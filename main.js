// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const palette = document.querySelectorAll("#palette .color");
palette.forEach(color => {
  color.addEventListener("click", (event) => {
    console.log(color);  
  currentColor.style.background = color.style.background; 
  })
})

const cell = document.querySelectorAll(" #canvas .cell");
cell.forEach(box => {
  box.addEventListener("click", (event)
  => {
    console.log(box);
    box.style.background = currentColor.style.background;
  })
})
