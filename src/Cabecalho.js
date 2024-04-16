import React from 'react';
import './Cabecalho.css';

function Cabecalho() {
  return (
    <div className="cabecalho"> {/* Aplique a classe CSS ao div do cabeçalho */}
      <div className='logo'>
        {<button>Logo</button>}
      </div>
      <div className='settings'>
        {<button>Settings</button>}
      </div>
    </div>
  );
}

export default Cabecalho;