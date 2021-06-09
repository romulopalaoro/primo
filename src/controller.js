export function verificaSeEhPrimo(num){
  let ehprimo = false;
  for(let i=2;i<num;i++){
    if(num%i===0){
      ehprimo= false;
      break;
    }else{
      ehprimo= true;
    }
  }
  return ehprimo;
}