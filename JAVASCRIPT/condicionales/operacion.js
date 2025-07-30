function comparacion() {

    let a, b;
    a = parseFloat(document.getElementById("varA").value);
    b = parseFloat(document.getElementById("varB").value);
    
    if (a > b) {
        alert("El valor de A es mayor que el de B");
    }

    else if (a < b) {
        alert("El valor de A es menor que el de B");
    } 

    else {
        alert("El valor de A es igual al de B");
    }   

}