
const row = document.querySelector (".row");

for (i = 1; i <=100; i++){

   
    if(i % 5 == 0 && i % 3 == 0){
        const col = document.createElement ("div");

        col.classList.add ("col");

        col.classList.add ("color1");
    
        col.append("fizzBuzz");
    
        row.append(col)

    } else if (i % 5 == 0){
        const col = document.createElement ("div");

        col.classList.add ("col");
        col.classList.add ("color2");
    
        col.append("Buzz");
    
        row.append(col)


     } else if (i % 3 == 0){
        const col = document.createElement ("div");

        col.classList.add ("col");

        col.classList.add ("color3");
    
        col.append("Fizz");
    
        row.append(col)


     } else {
        const col = document.createElement ("div");

        col.classList.add ("col");
    
        col.append(i);
    
        row.append(col)
   

     }

}