// selezionare il contenitore del div che voglio creare
const row = document.querySelector(".row");


// avviare il ciclo for


for (let i = 1; i <= 100; i++){

    if(i % 5 == 0 && i % 3 == 0){

        const col = 
        `<div class="col" id="color">
           fizzbuzz
         </div>     
`;
     row.innerHTML += col;
      document.getElementById("color").style.backgroundColor = "#f0466f";
    } else if (i % 5 == 0){
         const col = 
         `<div class="col" id="color">
            buzz
          </div>     
 `;
      row.innerHTML += col;
      document.getElementById("color").style.backgroundColor = "#ffd166";

     } else if (i % 3 == 0){

        const col = 
        `<div class="col" id="color">
           fizz
         </div>     
`;
     row.innerHTML += col;
     document.getElementById("color").style.backgroundColor = "#0cd6a1";

     } else {
        // creiamo il div completo

        const col = 
        `<div class="col">
              ${i}
         </div>
`;
          // aggiugiamo col al suo contenitore
          
          row.innerHTML += col;

     }
}