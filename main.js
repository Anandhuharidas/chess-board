// chess game
// 1st row : b w b .......
// 2nd row : w b w .......
// 3rd row : b w b .......


const container = document.querySelector(".container");

for (let i = 0; i < 8; i++){
    for (let j = 0; j <8; j++){
        var box = document.createElement("div")
        if (i%2 == 0){
           if (j%2 == 0){
               box.classList.add("dark")
           }else{
            box.classList.add("light")
           }
        } else{
          if (j%2 == 0){
            box.classList.add("light")
          }
          else{
            box.classList.add("dark")
          }
        }

        container.appendChild(box)
    }
}


