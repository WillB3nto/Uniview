import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AlunosModal({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <h2 id="modal-modal-title">Cadastro de Aluno</h2>
        <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth margin="normal" />
          <TextField id="outlined-basic" label="E-mail" type="email" variant="outlined" fullWidth margin="normal" />
          <TextField id="outlined-basic" label="Telefone" type="tel" variant="outlined" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AlunosModal;