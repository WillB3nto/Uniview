import Cabecalho from './Admin.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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

        <div className='conteudo'>
          <div className='left'>
              <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Disciplinas" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Turmas" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Professores" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Alunos" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </div>


          <div className='right'>
            <div className='search'>
              <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Pesquisar" variant="filled" />
              </Box>

              <Stack direction="row">
                <Button variant="contained" color="success">
                  Success
                </Button>
              </Stack>
            </div>
            
            <div className='table'>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
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