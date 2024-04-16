import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DisciplinasModal from './DisciplinasModal';
import TurmasModal from './TurmasModal';
import ProfessoresModal from './ProfessoresModal';
import AlunosModal from './AlunosModal';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Cabecalho from './Cabecalho.js'
import Admin from './Admin.css'
import MenuEsquerdo from './MenuLateralEsquerda.js';
import Tabela from './Tabela.js';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function App() {
  return (
      <div>
        <Cabecalho />
      
        <div className='conteudo'>
          <div className='left'>
            <MenuEsquerdo/>
          </div>

          <div className='right'>
            <Conteudo/>
          </div>
        </div>
      </div>
    );
}

function Conteudo() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tipo = searchParams.get('tipo');
  console.log('tipo: ', tipo);

  switch (tipo) {
    
    case 'disciplinas':
      return <Disciplinas />;
    case 'turmas':
      return <Turmas />;
    case 'professores':
      return <Professores />;
    case 'alunos':
      return <Alunos />;
    default:
      return null;
  }
}

function Disciplinas() {
  return (
    <div>
      <h1>Disciplinas</h1>
      <Tabela nome="Disciplinas" />
    </div>
  );
}

function Turmas() {
  return (
    <div>
      <h1>Turmas</h1>
      <Tabela nome="Turmas" />
    </div>
  );
}

function Professores() {
  return (
    <div>
      <h1>Professores</h1>
      <Tabela nome="Professores" />
    </div>
  );
}

function Alunos() {
  return (
    <div>
      <h1>Alunos</h1>
      <Tabela nome="Alunos" />
    </div>
  );
}

export default App;