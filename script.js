(
  function(){
    let container = document.querySelector(".container");
    let selected_color = document.querySelector(".selected-color");

    container.addEventListener('click', changeColor);


    function changeColor(){

      let choices = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

      let random_color = "#";

      for(let i = 0; i < 6; i++){
        random_color += choices[Math.floor(Math.random() * choices.length)];
      }

      container.style.backgroundColor = random_color;
      selected_color.innerHTML = random_color;
    }
  }
)()