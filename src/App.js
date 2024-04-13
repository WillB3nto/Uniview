import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>tela de login</title>
      </header>

      <body className='gradient-body'>
        <div className="login-container">
          <label htmlFor="cars">Acesso como:</label>
          <select name="cars" id="cars">
            <option value="Aluno">Aluno</option>
            <option value="Professor">Professor</option>
          </select>

          <h1 className="login-title">Login</h1>
          <input type="text" placeholder="Nome" />
          
          <input type="password" placeholder="Senha" />
          
          <button>Enviar</button>
        </div>
      </body>
    </div>
  );
}

export default App;