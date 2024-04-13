import './App.css';
import { useState } from 'react';

function App() {
  const [username, pegarUsuario] = useState('');
  const [password, pegarSenha] = useState('');

  const logar = () => {
    // Chamar função de validação e verificação aqui
    console.log('Usuário:', username);
    console.log('Senha:', password);
    if (username == '') alert ('campo nome vazio')
    if (password == '') alert ('campo senha vazio')
    if (username == 'admin', password == 'admin') {
      alert ('aministrador logado')
    }else if (username == 'aluno', password == 'aluno') {
      alert ('aluno logado')
    }else {
      alert ('usuário não existente')
    }
    // Você pode chamar a função de validação e verificação aqui e fazer o que for necessário com o resultado
  };

  return (
    <div className="App">
      <header className="App-header">
        <title>Uniview</title>
      </header>

      <body className='gradient-body'>
        <div className="login-container">
          <h1 className="login-title">Acessar</h1>
          <input type="text" placeholder="Nome" value={username} onChange={(e) => pegarUsuario(e.target.value)} />

          <input type="password" placeholder="Senha" value={password} onChange={(e) => pegarSenha(e.target.value)} />

          <button onClick={logar}>Enviar</button>
        </div>
      </body>
    </div>
  );
}

export default App;