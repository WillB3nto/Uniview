import Cabecalho from './Student.css';
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