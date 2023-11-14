// NOTE: PLEASE READ EACH INSTRUCTION COMMENT CAREFULLY TO HELP YOU PROCESS THIS PROJECT
// IF YOU ARE STUCK ASK AN INSTRUCTOR FOR HELP, ALWAYS WRITE THE CODE BELOW THE ASSIGNMENTS.

// Application global value for all products added.  This only goes away if you refresh the page.
// let productArray = [];
function init() {
  const products =
    JSON.parse(window.localStorage.getItem("productArray")) || [];
  let str = "";
  for (let i = 0; i < products.length; i++) {
    str += '<div style="display: block;">' + products[i] + "</div>";
  }
  document.getElementById("productList").innerHTML = str;
  return products;
}

// self executing function
const productArray = init();

function add(value) {
  productArray.push(value);
  window.localStorage.setItem("productArray", JSON.stringify(productArray));
}

function list() {
  return productArray;
}

function addProduct() {
  // Get the value from the input box
  let input = document.getElementById("input").value;
  // Get the output values
  let output = document.getElementById("productList");

  // Add the input value to the productArray.
  add(input);

  // const newDiv = document.createElement('div');
  // newDiv.style.display = 'block';
  // newDiv.textContent = input;
  // output.appendChild(newDiv);

  // We are going to re-render the entire list of products so we need to clear out what was there before.
  // output.innerHtml = "";

  let str = "";
  // Loop over all products and add them to the productList DOM element.
  const products = list();
  for (let i = 0; i < products.length; i++) {
    // Render to string, concatenating
    str += '<div style="display: block;">' + products[i] + "</div>";

    // Append method for adding DOM elements using productArray
    // // Creating a newly unattached element.
    // const newDiv = document.createElement('div');
    // // Setting it to be a block element and not inline
    // newDiv.style.display = 'block';
    // // Forcably sets the text in the element.
    // newDiv.textContent = productArray[i]; // Text value
    // // Attaches the newly unattached element to the output list aka #productList at the end of the elements.
    // output.appendChild(newDiv);
  }
  // Forably overwrite the entire output with the new string.
  output.innerHTML = str;
  // Clear out the value of the input box
  document.getElementById("input").value = "";
  return false;
}
