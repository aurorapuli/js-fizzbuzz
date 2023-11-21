// selezionare il contenitore del div che voglio creare
const row = document.querySelector(".row");


// avviare il ciclo for


for (let i = 1; i <= 100; i++){

    if(i % 5 == 0 && i % 3 == 0){

        const col = 
        `<div class="col color1">
           fizzbuzz
         </div>     
`;
     row.innerHTML += col;
    } else if (i % 5 == 0){
         const col = 
         `<div class="col color2">
            buzz
          </div>     
 `;
      row.innerHTML += col;

     } else if (i % 3 == 0){

        const col = 
        `<div class="col color3">
           fizz
         </div>     
`;
     row.innerHTML += col;

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