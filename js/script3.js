const TITULO_GRAFICA = {title:"Graficadora"};
const DETALLES_LINEA = {color: 'crimson', width: 1, shape:'spline'}
const CONFIGUACION_PLANO = {
    displayModeBar: true,
    scrollZoom: true,
    modeBarButtonsToRemove: ['zoom2d', 'select2d', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'toImage', 'sendDataToCloud']
}

function crearPlano(){
    Plotly.newPlot(document.getElementById("contenedorGrafica"),null, TITULO_GRAFICA, CONFIGUACION_PLANO);
}

function lineal(){
    let X = [];
    let Y = [];
    let factorLineal = document.getElementById('factorLineal').value;
    let agregadoLineal = document.getElementById('agregadoLineal').value;
    
    if (factorLineal == "")
        factorLineal = 1;
    else 
        factorLineal = parseFloat(factorLineal);
    if (agregadoLineal == "")
        agregadoLineal = 0;
    else
        agregadoLineal = parseFloat(agregadoLineal);

    for(let i = 0, x = -10; i <= 20; i++, x++){
        X[i] = x;
        Y[i] = (factorLineal * x) + agregadoLineal;
    }

    let datos = [{
        mode: 'lines',
        y: Y,
        x: X,
        line: DETALLES_LINEA
    }] 

    Plotly.react(document.getElementById("contenedorGrafica"), datos, TITULO_GRAFICA, CONFIGUACION_PLANO);
}

function senoidal(){
    let X = [];
    let Y = [];
    let factorSenoidal = document.getElementById('factorSenoidal').value;
    let factorLinealSenoidal = document.getElementById('factorLinealSenoidal').value;
    
    if (factorSenoidal == "")
        factorSenoidal = 1;
    else 
        factorSenoidal = parseFloat(factorSenoidal);

    if (factorLinealSenoidal == "")
        factorLinealSenoidal = 1;
    else
        factorLinealSenoidal = parseFloat(factorLinealSenoidal);

    for(let i = 0, x = -10; i <= 20000; i++, x+=.001){
        X[i] = x;
        Y[i] = factorSenoidal * Math.sin(x * factorLinealSenoidal);
    }

    let datos = [{
        mode: 'lines',
        y: Y,
        x: X,
        line: DETALLES_LINEA
    }] 

    Plotly.react(document.getElementById("contenedorGrafica"), datos, TITULO_GRAFICA, CONFIGUACION_PLANO);
}

function inversa(){
    let X = [];
    let Y = [];
    let factorInversa = document.getElementById('factorInversa').value;
    let agregadoInversa = document.getElementById('agregadoInversa').value;

    
    
    if (factorInversa == "")
        factorInversa = 1;
    else 
        factorInversa = parseFloat(factorInversa);

    if (agregadoInversa == "")
        agregadoInversa = 1;
    else
        agregadoInversa = parseFloat(agregadoInversa);

    for(let i = 0, x = -10; i < 1000; i++, x+=.01){
        X[i] = x;
        Y[i] = factorInversa/x + agregadoInversa
    }
    for(let i = 1000, x = 0.01; i < 2000; i++, x+=.01){
        X[i] = x;
        Y[i] = factorInversa/x + agregadoInversa
    }

    let datos = [{
        mode: 'lines',
        y: Y,
        x: X,
        line: DETALLES_LINEA
    }] 

    Plotly.react(document.getElementById("contenedorGrafica"), datos, TITULO_GRAFICA, CONFIGUACION_PLANO);
}

function campana(){
    let X = [];
    let Y = [];
    let factorCampana = document.getElementById('factorCampana').value;
    let factorLinealCampana = document.getElementById('factorLinealCampana').value;
    
    if (factorCampana == "")
        factorCampana = 1;
    else 
        factorCampana = parseFloat(factorCampana);

    if (factorLinealCampana == "")
        factorLinealCampana = 1;
    else
        factorLinealCampana = Math.abs(parseFloat(factorLinealCampana));

    for(let i = 0, x = -10; i <= 2000; i++, x+=.01){
        X[i] = x;
        Y[i] = factorCampana * Math.exp((factorLinealCampana * Math.pow(x, 2))*-1);
    }

    let datos = [{
        mode: 'lines',
        y: Y,
        x: X,
        line: DETALLES_LINEA
    }] 

    Plotly.react(document.getElementById("contenedorGrafica"), datos, TITULO_GRAFICA, CONFIGUACION_PLANO);
}

function polinomial(){
    let X = [];
    let Y = [];
    let factorPolinomialCuadratico = document.getElementById('factorPolinomialCuadratico').value;
    let factorPolinomialLineal = document.getElementById('factorPolinomialLineal').value;
    let agregadoPolinomial = document.getElementById('agregadoPolinomial').value;
    
    if (factorPolinomialCuadratico == "")
        factorPolinomialCuadratico = 1;
    else 
        factorPolinomialCuadratico = parseFloat(factorPolinomialCuadratico);

    if (factorPolinomialLineal == "")
        factorPolinomialLineal = 1;
    else
        factorPolinomialLineal = parseFloat(factorPolinomialLineal);
    
        if (agregadoPolinomial == "")
            agregadoPolinomial = 0;
    else
        agregadoPolinomial = parseFloat(agregadoPolinomial);

    for(let i = 0, x = -10; i <= 2000; i++, x+=.01){
        X[i] = x;
        Y[i] = factorPolinomialCuadratico * Math.pow(x, 2) + factorPolinomialLineal * x + agregadoPolinomial;
    }

    let datos = [{
        mode: 'lines',
        y: Y,
        x: X,
        line: DETALLES_LINEA
    }] 

    Plotly.react(document.getElementById("contenedorGrafica"), datos, TITULO_GRAFICA, CONFIGUACION_PLANO);
}