import React, { useState } from 'react';
import "../../components/arrayPrimos/arrayPrimos.css"
import {verificaSeEhPrimo} from "../../controller"

const ArrayPrimos = () => {
  const [arrayNumerosPrimos, setArrayNumerosPrimos] = useState([]);
  const [msg, setMsg] = useState("");
  let position;

  function criarArrayNumerosPrimos(){
    position = document.querySelector(".inputPosicao").value;
    let array = [2];

    console.log(position)
    if(position >= 1){
      for(let i=0;i<=104729; i++){
        if(verificaSeEhPrimo(i)){
          array.push(i);
          if(position == array.length){
            console.log(array)
            i=104729;
            document.querySelector(".inputPosicao").value = "";
          }
        }
      }
      console.log(array);
    }
    setArrayNumerosPrimos(array);
  }
  return (
    <div className="container2">
      <h3>Informe a quantidade de números primos que deseja ver ordenados: <br/>(max.: 10000º)</h3>
      <input className="inputPosicao" type="number" name="arrayPrimos"/>
      <div className="divButton">
        <button onClick={criarArrayNumerosPrimos} className="buttonsPosition">Processar</button>
      </div>
      <h4 className="listaPrimos">
        {arrayNumerosPrimos.map((elem)=>{
          console.log(elem)
          return `${elem}, `;
        })}
      </h4>
      

    </div>
  );
}

export default ArrayPrimos;
