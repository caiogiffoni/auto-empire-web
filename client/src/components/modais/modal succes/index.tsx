import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DivButton, DivContent } from '../styles';
import { BootstrapButton, BootstrapDialog, BootstrapDialogTitle } from '../bootstrapFunctions';

export default function ModalSuccess() {
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
        Open Succes Modal
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Sucesso!
        </BootstrapDialogTitle>
        <DivContent>
            <h3 className='title1'>Sua conta foi criada com sucesso</h3>
          <Typography className='description' gutterBottom>
            Agora você poderá ver seus negócios crescendo em grande escala.
          </Typography>
        </DivContent>
        <DivButton>
            <BootstrapButton id='primary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Ir para o login
            </BootstrapButton>
        </DivButton>
      </BootstrapDialog>
    </div>
  );
}
