/***************************
      DROP-DOWN DUNCTION
***************************/

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  let div = document.getElementsByClassName("myDropdown");
  let color = div.getElementsByClassName("color");
  for (i = 0; i < color.length; i++) {
    txtValue = color[i].textContent || color[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      color[i].style.display = "";
    } else {
      color[i].style.display = "none";
    }
    }
}

/***************************
      SORT FUNTION
***************************/

let btns = document.querySelectorAll(".btn");
let filterDiv = document.querySelectorAll(".filterDiv");

for (i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    let filter = e.target.dataset.filter;
    // console.log(filter)
    filterDiv.forEach((product)=> {
      if (filter == "all") {
        product.style.display = "block"
      } else {
          if (product.classList.contains(filter)) {
            product.style.display = "block"
          } else {
            product.style.display = "none"
          }
      }
    })
  })
}