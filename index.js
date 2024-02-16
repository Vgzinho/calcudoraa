

// var potencia = parseInt(prompt("insira um numero para ser o expoente"))
// console.log("numero digitado",potencia)

document.addEventListener('DOMContentLoaded', function(){
   const campo1 = document.getElementById('v1');
   const campo2 = document.getElementById('v2');
   const somar = document.getElementById('somar');
   const dividir = document.getElementById('dividir');
   const subtrair = document.getElementById('subtrair');
   const multiplicar = document.getElementById('multiplicar');

   const valor = document.getElementById('paragrafo');

   function calcula(operacao) {
       const numero1 = parseFloat(campo1.value);
       const numero2 = parseFloat(campo2.value);
       let resultado;

      if(operacao === 'somar'){
         resultado = numero1 + numero2
         valor.textContent =`o resultado é = ${resultado}`
      }
      else if(operacao === 'subtrair'){
         resultado = numero1 - numero2;
         valor.textContent =`o resultado é = ${resultado}`
      }
      else if(operacao === 'dividir'){
        resultado = numero1 / numero2;
        valor.textContent =`o resultado é = ${resultado}`
         }
      if(operacao === 'multiplicar'){
         resultado = numero1*numero2;
         valor.textContent =`o resultado é = ${resultado}`
      }
         }


   somar.addEventListener('click',function(){
      calcula('somar')
   });
   
   subtrair.addEventListener('click', function() {
      calcula('subtrair');
  });

  multiplicar.addEventListener('click', function() {
      calcula('multiplicar');
  });

  dividir.addEventListener('click', function() {
      calcula('dividir');
  });
});





// function calcula(numero,potencia){
//    for(aux = 1;aux <= potencia;aux ++){
//     resultado =  resultado * numero
//    }
//    return resultado;
   
// }







