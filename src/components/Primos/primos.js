import React, { useEffect, useState } from 'react';
import "./primos.css";
import {verificaSeEhPrimo} from "../../controller"

const Primos = () => {
  const [string , setString ]=useState("");
 
  let arrayPrimos=[];
  let numeroDesejado;

  useEffect(() => {
  }, [string]);

  function verificaPosicao(){
    numeroDesejado=document.querySelector(".inputPosition").value;
    arrayPrimos.push(2);

    if(numeroDesejado>1){
      for(let i=3; i<=105000; i++){
        if(verificaSeEhPrimo(i)){ 
          arrayPrimos.push(i)
          if(arrayPrimos.length == numeroDesejado){
            console.log(arrayPrimos)
            i=105001; 
          }
        }
      }
      setString("O " + numeroDesejado+ "º número primo é o " + arrayPrimos[numeroDesejado-1]);
    }else if(numeroDesejado<1){
      arrayPrimos=[];
      setString("Por favor insira um número maior que 0");
    }else{
      setString("O " + numeroDesejado+ "º número primo é o " + arrayPrimos[numeroDesejado-1]);
    }
    numeroDesejado="";
    document.querySelector(".inputPosition").value = "";
    arrayPrimos=[];
  }
  
  return (
    <div className="container1">
      <h3 htmlFor="position">Escreva a posição do número primo desejado:</h3>
      <input className="inputPosition" type="text" name="primo" />
      <div className="divButton">
        <button className="buttons" onClick={verificaPosicao} >Procurar</button>
      </div>
      {string?<h4 Style="color: rgb(96, 78, 199)"> {string} </h4> : <h4></h4>}
    </div>
  );
}
export default Primos;