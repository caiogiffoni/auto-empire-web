import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { DivButton, DivContent } from '../styles';
import { BootstrapButton, BootstrapDialog, BootstrapDialogTitle } from '../bootstrapFunctions';

export default function ModalEditAddress() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Edit Address Modal
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Editar endereço
        </BootstrapDialogTitle>

        <DivContent>

            <Typography className='title1' gutterBottom>Informações de endereço</Typography>
            <Typography className='title2' gutterBottom>CEP</Typography>
            <TextField className='textField' placeholder='89888.888'/>


            <div className='info'>
                <div className='divisors2'>
                    <Typography className='title2' gutterBottom>Estado</Typography>
                    <TextField placeholder='Paraná'/>
                </div>
                <div className='divisors2'>
                    <Typography className='title2' gutterBottom>Cidade</Typography>
                    <TextField placeholder='Curitiba'/>
                </div>
            </div>

            <Typography className='title2' gutterBottom>Rua</Typography>
            <TextField className='textField' placeholder='Rua do paraná'/>

            <div className='info'>
                <div className='divisors2'>
                    <Typography className='title2' gutterBottom>Número</Typography>
                    <TextField placeholder='1029'/>
                </div>
                <div className='divisors2'>
                    <Typography className='title2' gutterBottom>Complemento</Typography>
                    <TextField placeholder='Apart 12'/>
                </div>
            </div>

            <button className='button'>Adicionar campo para imagem da galeria</button>


        </DivContent>

        <DivButton>
            <BootstrapButton id='tertiary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Excluir anúncio
            </BootstrapButton>
            <BootstrapButton id='primary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Salvar alterações
            </BootstrapButton>
        </DivButton>
      </BootstrapDialog>
    </div>
  );
}
