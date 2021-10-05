
//Variables Globales

let num1 = 0;
let suma_presionado = false;
let resta_presionado = false;
let multi_presionado = false;
let div_presionado = false;
let resultado_total = 0;
let cuadrado_infinito = false;


//Función para vaciar el resultado//

  function vaciar() {
    document.getElementById("input").value = "";
  }


// Función para calcular el cuadrado de un número//

  function cuadrado() {
    if (cuadrado_infinito== false) { 
      //Para que me tome los valores negativos también
      let num = parseFloat(document.getElementById("input").value);
      let total = num * num;
    
      if (total<100){
        document.getElementById("total").innerHTML = total;
        resultado_total = total
        document.getElementById("resultado").innerHTML = "El valor es menor a 100";
      } else if (total>= 100){
        document.getElementById("total").innerHTML = total;
        resultado_total = total
        document.getElementById("resultado").innerHTML = "El valor es mayor a 100";
      
      } else if (total>= 200){
        document.getElementById("total").innerHTML = total;
        resultado_total = total
        document.getElementById("resultado").innerHTML = "El valor es mayor a 200";
      }


    }else if(cuadrado_infinito == true){
      let total = cuadrado_infinito * cuadrado_infinito
      if (total < 100){
        document.getElementById("total").innerHTML = total;
        resultado_total = total
      }else if (total >=100) {
        document.getElementById("total").innerHTML = total;
        resultado_total = total
        document.getElementById("resultado").innerHTML = "El valor es menor a 100";
      } else if (total>= 100){
        document.getElementById("total").innerHTML = total;
        resultado_total = total
        document.getElementById("resultado").innerHTML = "El valor es mayor a 100";
      } else if (total>= 200) {
        document.getElementById("total").innerHTML = total;
        resultado_total = total
        document.getElementById("resultado").innerHTML = "El valor es mayor a 200";
      }
      cuadrado_infinito = true;

    }
    vaciar();
  }

// Función para calcular el cubo de un número//

//Esta función solo admite el cubo de dos números 
function al_cubo() {
  let num = document.getElementById("input").value;
  let total = num * num * num;
  document.getElementById("resultado").innerHTML = total;
  vaciar();
}


// Función para calcular el modulo de un número//

  function modulo() {
    let num = document.getElementById("input").value;
    if (num>=0){
      document.getElementById("resultado").innerHTML = num
    }
    else {
        let resultado = (num * -1)
        document.getElementById("resultado").innerHTML = resultado;
        //vaciar();

    }
  
  }

//Función para calcular el factorial de un número//

function factorial() {
    let resultado = 1;
    let num = document.getElementById("input").value;
    for ( i=1; i<= num; i++) {
        resultado = resultado * i
    }
    document.getElementById("resultado").innerHTML = resultado;
    //vaciar();
  }


//Función para calcular la suma de un número//

function add(){
  num1 = parseFloat(document.getElementById("input").value);
  suma_presionado = true;
  vaciar()
}


//Función para calcular la suma de un número//

function resta(){
  num1 = parseFloat(document.getElementById("input").value);
  resta_presionado = true;
  vaciar()
}


//Función para calcular la multiplicación de un número//

function mul(){
  num1 = parseFloat(document.getElementById("input").value);
  multi_presionado = true;
  vaciar()
}


//Función para calcular la división de un número//

function dividir(){
  num1 = parseFloat(document.getElementById("input").value);
  div_presionado = true;
  vaciar()
}


//Función para calcular el total de la suma, resta, multiplicación o división de un número//


function eq(){
  if (suma_presionado){
    let num2 = parseFloat(document.getElementById("input").value);
    let total = num1 + num2;
    document.getElementById("resultado").innerHTML = total;
  } else if(resta_presionado){
    let num2 = parseFloat(document.getElementById("input").value);
    let total = num1 - num2;
    document.getElementById("resultado").innerHTML = total;
  } else if (multi_presionado){
    let num2 = parseFloat(document.getElementById("input").value);
    let total = num1 * num2;
    document.getElementById("resultado").innerHTML = total; 
  } else if (div_presionado){
    let num2 = parseFloat(document.getElementById("input").value);
    let total = num1 / num2;
    document.getElementById("resultado").innerHTML = total;
  }
  suma_presionado = false;
  resta_presionado = false;
  multi_presionado = false;
  div_presionado = false;

}

//Función para ordenar una serie de números//


function ordenar(){
  let inputValue = document.getElementById("input").value;
  let ArrayInput = inputValue.split(",");
  ArrayInput = Array.from(ArrayInput);
  ArrayInput = ArrayInput.map(function (x){
      return parseFloat(x,10);
  })
  let resultado = ArrayInput.sort((a,b) => a-b);
  document.getElementById("resultado").innerHTML = resultado;
  repeatSquare = false;
}

//Función para revertir una serie de números//

function revertir(){
  let inputValue = document.getElementById("input").value;
  let ArrayInput = inputValue.split(",");
  ArrayInput = Array.from(ArrayInput);
  ArrayInput = ArrayInput.map(function (x){
      return parseFloat(x,10);
  })
  let resultado = ArrayInput.reverse((a,b) => a-b);
  document.getElementById("resultado").innerHTML = resultado;
  repeatSquare = false;
}

//Función para quitar una serie de números 

function quitar(){
  let inputValue = document.getElementById("input").value;
  let ArrayInput = inputValue.split(",");
  ArrayInput = Array.from(ArrayInput);
  ArrayInput = ArrayInput.map(function (x){
      return parseFloat(x,10);
  })
  ArrayInput.pop();
  document.getElementById("resultado").innerHTML = ArrayInput;
}

//Función para calcular el sumatorio de una serie de números 


function sumatorio(){
  let sumatorio_numeros = 0;
  let numero_introducido = document.getElementById("pantalla").value;
  let ArrayInput = numero_introducido.split(",");
  ArrayInput = Array.from(ArrayInput);
  ArrayInput = ArrayInput.map(function (x){
      return parseFloat(x,10);
  })
  sumatorio_numeros = ArrayInput.reduce((a,b) => a+b,0);
  document.getElementById("resultado").innerHTML = sumatorio_numeros;
}

