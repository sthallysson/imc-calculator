import { useState } from "react";
import "./App.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal! seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(
        "Você está levemente acima do peso! seu IMC é: " + imc.toFixed(2)
      );
    } else if (imc >= 34.9) {
      setMensagem("Você está na Obesidade! seu IMC é: " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) EX: 90"
          value={peso}
          onChange={(event) => {
            setPeso(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Altura em (cm) EX: 180"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  );
}
