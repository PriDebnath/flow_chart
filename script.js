let button = document.getElementById("button");

let addOneBlock = () => {
  let newDiv = document.createElement("div");

  let newInput = document.createElement("input");

  let newButton = document.createElement("button");

  let deleteButton = document.createElement("button");

  deleteButton.classList = "deleteButton";

  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  let newHr = document.createElement("hr");

  newHr.style.transform = "rotate(90deg)";

  newButton.innerHTML = `<i class="fa-solid fa-plus"></i>`;

  newDiv.appendChild(newInput);
  newDiv.appendChild(newButton);
  newDiv.appendChild(newHr);
  newDiv.appendChild(deleteButton);

  document.body.appendChild(newDiv);

  newButton.addEventListener("click", oneOrTwoBlock);

  deleteButton.addEventListener("click", () => {
    document.body.removeChild(newDiv);
  });
};

let addTwoBlock = () => {
  let mainDiv = document.createElement("div");
  mainDiv.classList = "mainDiv";

  let firstDiv = document.createElement("div");

  let secondDiv = document.createElement("div");

  let firstInput = document.createElement("input");
  let secondInput = document.createElement("input");

  let firstButton = document.createElement("button");
  firstButton.classList = "firstButton";

  let secondButton = document.createElement("button");
  secondButton.classList = "secondButton";

  let firstDeleteButton = document.createElement("button");

  firstDeleteButton.classList = "deleteButton";

  firstDeleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  let secondDeleteButton = document.createElement("button");

  secondDeleteButton.classList = "deleteButton";

  secondDeleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  let firstHr = document.createElement("hr");

  firstHr.style.transform = "rotate(-0deg)";

  firstDiv.appendChild(firstInput);
  secondDiv.appendChild(secondInput);

  firstDiv.appendChild(firstButton);
  secondDiv.appendChild(secondButton);

  firstDiv.appendChild(firstDeleteButton);
  secondDiv.appendChild(secondDeleteButton);

  firstButton.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  secondButton.innerHTML = `<i class="fa-solid fa-plus"></i>`;

  mainDiv.appendChild(firstHr);

  mainDiv.appendChild(firstDiv);

  mainDiv.appendChild(secondDiv);

  document.body.appendChild(mainDiv);

  firstDeleteButton.addEventListener("click", () => {
    mainDiv.removeChild(firstDiv);
    mainDiv.removeChild(firstHr);
  });

  secondDeleteButton.addEventListener("click", () => {
    mainDiv.removeChild(secondDiv);
    mainDiv.removeChild(firstHr);
  });

  firstButton.addEventListener("click", oneOrTwoBlock);

  secondButton.addEventListener("click", oneOrTwoBlock);
};

function oneOrTwoBlock() {
  let prompt = window.confirm("Wanna add two block ?");

  console.log(prompt);
  if (prompt) {
    addTwoBlock();
  } else {
    addOneBlock();
  }
}

button.addEventListener("click", () => {
  oneOrTwoBlock();
});
