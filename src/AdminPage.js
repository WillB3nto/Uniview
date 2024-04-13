import Cabecalho from './Admin.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [redirectTo, setRedirectTo] = useState(null);

  const redirecionar = () => {
      setRedirectTo('/');
    
  };

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

    return (
      <div>
        <div className="cabecalho">
          <div className='logo'>
            <button onClick={redirecionar}>Logo</button>       
          </div>
          <div className='settings'>
            <button onClick={redirecionar}>settings</button>
          </div>
        </div>
      </div>
    );
  }

export default App;


//   return (
//     <div className="App">
//       <header className="App-header">
//         <title>Uniview</title>
//       </header>

//       <body className='gradient-body'>
//         <div className="login-container">
//           <h1 className="login-title">Acessar</h1>
//           <input type="text" placeholder="Nome" value={username} onChange={(e) => setUsername(e.target.value)} />
//           <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
//           <button onClick={logar}>Enviar</button>
//         </div>
//       </body>
//     </div>
//   );
// }