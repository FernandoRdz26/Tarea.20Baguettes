let especialidad = 0;
let total = 0;

function calcular(){
    event.preventDefault();
    especialidad = document.getElementById("especialidad");
    console.log(especialidad.value);
    
    if (especialidad.value == "clasica"){
        total = 79.99;
    }
    else if(especialidad.value == "bbq"){
        total = 99.99;
    }

    else if (especialidad.value == "tocino"){
        total = 119.99;
    }
    else if(especialidad.value == "doble"){
        total = 149.99;
    }
    else if(especialidad.value = "hawaiana"){
        total =179.99;
    }

    document.getElementById("total").value = total
}