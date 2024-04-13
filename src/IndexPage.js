import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectTo, setRedirectTo] = useState(null);
  
    const logar = () => {
      if (username === 'admin' && password === 'admin') {
        setRedirectTo('/admin');
      } else if (username === 'aluno' && password === 'aluno') {
        setRedirectTo('/aluno');
      }
    };
  
    if (redirectTo) {
      return <Navigate to={redirectTo} />;
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <title>Uniview</title>
        </header>
  
        <body className='gradient-body'>
          <div className="login-container">
            <h1 className="login-title">Acessar</h1>
            <input type="text" placeholder="Nome" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={logar}>Enviar</button>
          </div>
        </body>
      </div>
    );
  }

  export default App;