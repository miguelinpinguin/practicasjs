function opcionesUdea() {
    let op, mensaje1, mensaje2, mensaje3, mensajedefault;
    //mensajes de las opciones
    mensaje1 = "Para mas informacion, consulte la pagina oficial de UDEA:<a href= 'https://www.udea.edu.co/wps/myportal/udea/web/inicio/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi_QJNXQ2NnA18_D2NXQ0CLf1MA4zdPY1MzI31wwkpiAJKG-AAjgZA_VFgJRaWzkaGjiYGPgbehqYGjoGuAX4h_s4BLl5GUAV4zCjIjTDIdFRUBAC3KPbO/dz/d5/L2dBISEvZ0FBIS9nQSEh/#Z7_NQ5E12C0LORV00AMM9F770HFC1'>Toca aqui</a>";
    mensaje2 = "Para presentar su PQRS ingrese a:<a href= 'https://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/canales-atencion/virtual'>Toca aqui</a>"; 
    mensaje3 = "Te pondremos en contacto con un asesor via whatsapp:<a href= 'https://wa.me/573214207310'>Toca aqui</a>";
    mensajedefault = "Opcion no valida, por favor intente de nuevo.";

    //obtener el valor de la opcion
    op = document.getElementById("opcion").value;

    //validar la opcion
    switch (op) {
        case "1":
            document.getElementById("respuesta").innerHTML = mensaje1;
        break;

        case "2":
            document.getElementById("respuesta").innerHTML = mensaje2;
        break;

        case "3":
            document.getElementById("respuesta").innerHTML = mensaje3;
        break
        default:
            document.getElementById("respuesta").innerHTML = mensajedefault;
    }
}