function convertir(){
    let inp, out, typeIn, typeOut;

    inp = parseFloat(document.querySelector("#input").value);
    typeIn = parseInt(document.querySelector("#in").value);
    typeOut = parseInt(document.querySelector("#out").value);

    if(typeIn == typeOut){
        out = inp;
    }else{
        if(typeIn == 1){
            if(typeOut == 2){
                out = (inp * 1.8) + 32;
            }else if(typeOut == 3){
                out = inp  + 273.15;
            }else if(typeOut == 4){
                out = (9 * (inp  + 273.15))/5;
            }
        }else if(typeIn == 2){
            if(typeOut == 1){
                out = (inp - 32) / 1.8;
            }else if(typeOut == 3){
                out = (inp - 32) / 1.8 + 273.15;
            }else if(typeOut == 4){
                out = inp + 459.67
            }
        }else if(typeIn == 3){
            if(typeOut == 1){
                out = inp - 275.15;
            }else if(typeOut == 2){
                out = (inp - 273.15) * 1.8 + 32;
            }else if(typeOut == 4){
                out = 9 * inp / 5;
            }
        }else if(typeIn == 4){
            if(typeOut == 1){
                out = 5 * (inp - 491.67) / 9;
            }else if(typeOut == 2){
                out = inp - 459.67;
            }else if(typeOut == 3){
                out = 5/9 * inp;
            }
        }

        inp = (inp == 'number')?inp.toFixed(2):inp;
    }
    document.querySelector("#outp").value = out;
}
