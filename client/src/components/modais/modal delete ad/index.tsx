import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DivButton, DivContent } from '../styles';
import { BootstrapButton, BootstrapDialog, BootstrapDialogTitle } from '../bootstrapFunctions';

export default function ModalDeleteAd() {
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
        Open Delete Ad Modal
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Excluir anúncio
        </BootstrapDialogTitle>
        <DivContent>
          <Typography className='description' gutterBottom>
            <h3 className='title1'>Tem certeza que deseja remover este anúncio?</h3>
                Essa ação não pode ser desfeita, isso excluirá permanentamente sua conta e removerá seus dados
                de nossos servidores.
          </Typography>
        </DivContent>
        <DivButton>
            <BootstrapButton id='tertiary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Cancelar
            </BootstrapButton>
            <BootstrapButton id='quarternary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Sim, excluir anúncio
            </BootstrapButton>
        </DivButton>
      </BootstrapDialog>
    </div>
  );
}
