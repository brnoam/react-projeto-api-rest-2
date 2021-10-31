import { useState } from 'react';
import './App.css';
import ViaCepApi from './services/ViaCepApi';

function App() {

 const [mensagem, setMensagem] = useState("");
 const [dados, setDados] = useState({});

 const buscarCep = (e) =>{
    e.preventDefault();

    if(e.target.value && e.target.value.length === 8){
      // {cep}/json/
      let url = `${e.target.value}/json/`;

      ViaCepApi.get(url)
      .then((response) =>{
          if(response.status >= 200 && response.status < 300 && !response.data.erro){
            setDados(response.data);
            setMensagem("");
          }else{
            setDados({});
            setMensagem("Favor informe um cep válido com 8 dígitos");
          }
      })
      .catch((error) =>{
        setDados({});
        setMensagem("Favor informe um cep válido com 8 dígitos");
      });

    }else{
      setDados({});
      setMensagem("Favor informe um cep válido com 8 dígitos");
    }
 }


  return (

    <div className="App">

      <h1 className="titulo1">CONSULTAR CEP </h1>
     
     <input placeholder="ex:46400-000" type="number" name="cep" onChange={(e) => {buscarCep(e)}} />
      
      

      
      <div className="principal">

  
      {mensagem === ""
      ?
      
      
      
      
      <div>
       <h1 className="titulo"> CEP {dados?.cep} </h1>
       <h3 className="subtitulo">{dados?.localidade} - { dados?.uf} </h3>
      



        </div>
      : mensagem}



<div className="principal2">
{mensagem === ""
      ?
      
     
      
      <div className="esquerda">
       <p> Logradouro: {dados?.logradouro}</p> 
       <p> CEP {dados?.cep} </p>
       <p>  Bairro: { dados?.bairro} </p>
        


        </div>
      : mensagem}





     {mensagem === ""
      ?
      
      
      
      
      <div className="direita">
       
       <p> Cidade: {dados?.localidade}</p>
       <p>  UF: { dados?.uf} </p>
       <p>  CÓDIGO DDD: { dados?.ddd} </p>



        </div>
       
       
      : mensagem}

      

</div>















    </div>

    </div>

  );
  







  
}


export default App;
