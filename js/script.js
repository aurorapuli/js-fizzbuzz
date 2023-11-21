// selezionare il contenitore del div che voglio creare
const row = document.querySelector(".row");


// avviare il ciclo for


for (let i = 1; i <= 100; i++){

    if(i % 5 == 0 && i % 3 == 0){

        const col = 
        `<div class="col">
           fizzbuzz
         </div>     
`;
     row.innerHTML += col;

    } else if (i % 5 == 0){
         const col = 
         `<div class="col">
            buzz
          </div>     
 `;
      row.innerHTML += col;

     } else if (i % 3 == 0){

        const col = 
        `<div class="col">
           fizz
         </div>     
`;
     row.innerHTML += col;

           console.log(col);

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