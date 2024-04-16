import React from 'react';
import Modal from '@mui/material/Modal';
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

function ProfessoresModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
       <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <h2 id="modal-modal-title">Cadastro de Professor</h2>
        <form>
          <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
          <TextField id="email" label="E-mail" type="email" variant="outlined" fullWidth margin="normal" />
          <TextField id="telefone" label="Telefone" type="tel" variant="outlined" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </form>
      </Box>
        <button onClick={onClose}>Fechar Modal</button>
      </div>
    </Modal>
  );
}

export default ProfessoresModal;