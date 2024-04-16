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
import Modal from '@mui/material/Modal'; // Importe o componente Modal do Material-UI
import { useState } from 'react';
import ProfessoresModal from './ProfessoresModal'; // Importe o componente ProfessoresModal
import Estilo from './Tabela.css';

function Tabela({ nome }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const rows = [
    { name: 'Bolo', calories: 150, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: 'Sorvete', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  ];

  return (
    <div>
      <div className='search'>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
          <TextField id="filled-basic" label="Pesquisar" variant="filled" />
        </Box>

        <Stack direction="row">
          <Button variant="contained" color="success" onClick={handleOpenModal}>
            Adicionar
          </Button>
        </Stack>
      </div>

      <div className='table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{nome} (100g serving)</TableCell>
                <TableCell align="right">Calorias</TableCell>
                <TableCell align="right">Gordura&nbsp;(g)</TableCell>
                <TableCell align="right">Carboidratos&nbsp;(g)</TableCell>
                <TableCell align="right">ProteÃ­na&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
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
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div>
          switch
          <ProfessoresModal onClose={handleCloseModal} />
        </div>
      </Modal>
    </div>
  );
}

export default Tabela;