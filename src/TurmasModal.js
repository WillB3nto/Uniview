import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TurmasModal({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    // Por exemplo, enviar os dados para o backend ou realizar a validação
    // Após o envio bem-sucedido, você pode fechar o modal
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
        <h2 id="modal-modal-title">Cadastro de Turmas</h2>
        <form onSubmit={handleSubmit}>
          <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
          <TextField id="email" label="E-mail" type="email" variant="outlined" fullWidth margin="normal" />
          <TextField id="telefone" label="Telefone" type="tel" variant="outlined" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Cadastrar
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default TurmasModal;