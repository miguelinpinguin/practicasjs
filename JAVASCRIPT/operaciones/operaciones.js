    function suma() {
        let a, b;
        a = parseFloat(document.getElementById("varAsuma").value);
        b = parseFloat(document.getElementById("varBsuma").value);

        let r = a + b ;
        document.getElementById("resultadosuma").innerHTML = "El resultado de la suma es: " + r;
    }

function resta() {
        let a, b;
        a = parseFloat(document.getElementById("varAresta").value);
        b = parseFloat(document.getElementById("varBresta").value);

        let r = a - b ;
        document.getElementById("resultadoresta").innerHTML = "El resultado de la resta es: " + r;
    }

function multiplicacion() {
        let a, b;
        a = parseFloat(document.getElementById("varAmultiplicacion").value);
        b = parseFloat(document.getElementById("varBmultiplicacion").value);

        let r = a * b ;
        document.getElementById("resultadomultiplicacion").innerHTML = "El resultado de la multiplicacion es: " + r;
    }

function division() {
        let a, b;
        a = parseFloat(document.getElementById("varAdivision").value);
        b = parseFloat(document.getElementById("varBdivision").value);

        let r = a / b ;
        document.getElementById("resultadodivision").innerHTML = "El resultado de la division es: " + r;
    }