function calcular(){
    let masa, estatura, imc, bgColor, color;
    //Alegrate, ten fe en el proceso :D
    masa = parseFloat(document.getElementById("masa").value);
    estatura = parseFloat(document.getElementById("estatura").value);


        imc = masa / (estatura * estatura);
        imc = imc.toFixed(3);
        if(imc > 40){
            bgColor = "red";
            color = "white";
        }else if (imc >= 35){
            bgColor = "orangered";
            color = "white";
        }else if (imc >= 30){
            bgColor = "orange";
            color = "black";
        }else if (imc >= 25){
            bgColor = "yellow";
            color = "black";
        }else if (imc >= 18.5){
            bgColor = "green";
            color = "black";
        }else{
            bgColor = "skyblue";
            color = "black";
        }


    document.getElementById("output").value = imc;
    document.getElementById("output").style.color = color;
    document.getElementById("output").style.backgroundColor = bgColor;


}