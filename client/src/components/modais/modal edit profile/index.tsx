import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Container, DivButton, DivContent } from '../styles';
import { BootstrapButton, BootstrapDialog, BootstrapDialogTitle } from '../bootstrapFunctions';

export default function ModalEditProfile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Edit Profile Modal
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Editar perfil
        </BootstrapDialogTitle>

        <DivContent>
            <Typography className='title1' gutterBottom>Informações pessoais</Typography>
            <Typography className='title2' gutterBottom>Nome</Typography>
            <TextField className='textField'/>

            <Typography className='title2' gutterBottom>Email</Typography>
            <TextField className='textField'/>

            <Typography className='title2' gutterBottom>CPF</Typography>
            <TextField className='textField'/>

            <Typography className='title2' gutterBottom>Celular</Typography>
            <TextField className='textField'/>

            <Typography className='title2' gutterBottom>Data de nascimento</Typography>
            <TextField className='textField'/>
            
            <Typography className='title2' gutterBottom>Descrição</Typography>
            <TextField className='textField' placeholder='ex: Mercedes Benz A200ex: Mercedes Benz A200ex: Mercedes Benz A200ex: Mercedes Benz A200 '/>
        </DivContent>

        <DivButton>
            <BootstrapButton id='tertiary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Cancelar
            </BootstrapButton>
            <BootstrapButton id='primary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Salvar alterações
            </BootstrapButton>
        </DivButton>
      </BootstrapDialog>
    </Container>
  );
}
