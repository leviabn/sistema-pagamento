import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [cvv, setCvv] = useState("")
  const [senha,setSenha] = useState("");

  function handleCardNumber(event) {
    let cardNumber = event.target.value;
    let formattedCardNumber = cardNumber.replace(/\D/g,'');
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    formattedCardNumber = formattedCardNumber.replace(/(\d{4})/g, '$1 ').trim();
    setNumero(formattedCardNumber);
  }

  function sendCartao(event) {
    event.preventDefault()
    
    if(!nome || !numero || !mes || !ano || !senha) {
      toast.error("Preencha todos os campos!")
      return
    }

    if(cvv.length !== 3) {
      toast.error("CVV inválido")
      return
    }
  }

  
  return (
    
    <div className='w-full h-screen flex bg-white'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
      />
      <div className="w-[50%] h-full relative">
        <div className="w-[60%] h-full bg-purple-800"></div>
        <div className="w-[40%] h-full"></div>
        <div className="w-full h-full absolute top-0 flex flex-col">
          <div className="w-[470px] h-[300px] bg-black rounded-[10px] mt-[30px] ml-[70px]">
            <div className="w-full h-[35%] flex">
              <div className="w-[35%] h-full flex items-center justify-center gap-[3px] pl-[10px]">
                <div className="bg-gray-300 w-[80px] h-[80px] rounded-full"></div>
                <div className="bg-gray-300 w-[60px] h-[60px] rounded-full"></div>
              </div>
              <div className="w-[70%] h-full flex items-start justify-end pr-[20px] pt-[15px]">
                <p className="text-[23px] text-white">C6 Bank</p>
              </div>
            </div>
            <div className="w-full h-[30%] pl-[20px] flex items-center">
              <FcSimCardChip size={80} />
              <LuNfc size={40} color="white" />

            </div>
            <div className="w-full pl-[20px]">
              <p className="text-[25px] text-white p">
                {numero || "0000 0000 0000 0000"}
              </p>
              <p className=" mt-[15px] pl-[10px] text-[20px] text-white">
                {nome || "Nome no cartão"}
              </p>
            </div>
          </div>
          <div className="w-[470px] h-[300px] bg-black rounded-[10px] mt-[30px] ml-[210px] flex flex-col items-center">
            <div className="w-full h-[50px] mt-[40px] bg-gray-900"></div>
            <div className="w-[80%] h-[50px] mt-[40px] bg-gray-400">
              <p className="flex justify-end items-center h-[50px] pr-[20px] italic">000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full">
        <div className="w-full h-[30%] p-[40px]">
          <h1 className="text-[55px]">Preencha seus dados</h1>
        </div>
        <div className="w-full h-[70%] flex justify-center">
          <form className="w-[60%] h-full flex flex-col gap-[10px]">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Nome no cartão</label>
              <input 
                type="text" 
                className="w-full p-[10px] bg-gray-300 rounded-[5px]"
                onChange={
                  (event) => {setNome(event.target.value)}
                } 
              />
            </div>
            <div className="w-full flex flex-col ">
              <label htmlFor="" className="text-[20px]">Número do cartão</label>
              <input 
                type="text" 
                value={numero}
                className="w-full p-[10px] bg-gray-300 rounded-[5px]" 
                placeholder="0000 0000 0000 0000"
                onChange={
                  (event) => {handleCardNumber(event)}
                }
              />
            </div>
            <div className="w-full flex">
              <div className="w-[65%] flex flex-col">
                <label htmlFor="" className="text-[20px]">Data de expiração</label>
                <div className="flex gap-[10px]">
                  <input 
                    type="number"
                    className="w-[45%] p-[10px] bg-gray-300 rounded-[5px]"
                    placeholder="MM"
                    onChange={
                      (event) => {setMes(event.target.value)}
                    }
                  />
                  <input 
                    type="number"
                    className="w-[45%] p-[10px] bg-gray-300 rounded-[5px]"
                    placeholder="AA"
                    onChange={
                      (event) => {setAno(event.target.value)}
                    }
                  />
                </div>
              </div>
              <div className="w-[35%] flex flex-col">
                <label htmlFor="" className="text-[20px]">CVV</label>
                <input 
                  type="text"
                  className="w-[100%] p-[10px] bg-gray-300 rounded-[5px] italic"
                  placeholder="000"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[20px]">Senha do cartão</label>
              <input 
                type="password" 
                className="w-full p-[10px] bg-gray-300 rounded-[5px]"
                placeholder="****"
                onChange={
                  (event) => {setSenha(event.target.value)}
                } 
              />
            </div>
            <div className="w-full flex items-center justify-center mt-[15px]">
              <button 
                onClick={sendCartao}
                type="submit" 
                className="w-[80%] h-[45px] border-none rounded-[5px] bg-purple-800 text-white font-bold"
                >
                  Comprar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
