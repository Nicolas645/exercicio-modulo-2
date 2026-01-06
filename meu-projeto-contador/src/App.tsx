import { useState } from 'react';
import './App.css';

interface HeaderProps {
  titulo: string;
}

const Header = ({ titulo }: HeaderProps) => (
  <h1>{titulo}</h1>
);

function App() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div className="container">
      <Header titulo="Bem-vindo ao meu Contador!" />
      
      <div className="card">
        <p>O valor atual é: <strong>{contador}</strong></p>
        
        <button 
          className="btn-contador" 
          onClick={() => setContador(contador + 1)}
        >
          Aumentar Número
        </button>
      </div>
    </div>
  );
}

export default App;