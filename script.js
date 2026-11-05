let especialidad = 0;
let total = 0;

function calcular(){
    event.preventDefault();
    especialidad = document.getElementById("especialidad");
    let pan = document.querySelector('input[name="pan"]:checked');
    console.log(pan.value);
    console.log(especialidad.value);
    
    if (especialidad.value == "clasica"){
        total = 79.99*1;
    }
    else if(especialidad.value == "bbq"){
        total = 99.99*1;
    }

    else if (especialidad.value == "tocino"){
        total = 119.99*1;
    }
    else if(especialidad.value == "doble"){
        total = 149.99*1;
    }
    else if(especialidad.value = "hawaiana"){
        total = 179.99*1;
    }

    if(pan == "clasico"){
        total = total*1
    }
    else if(pan == "ajonjoli"){
        total = total*1 + 19.99*1;
    }

    
    document.getElementById("total").value = total
}