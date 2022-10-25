import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { DivButton, DivButtonCenter, DivContent } from '../styles';
import { BootstrapButton, BootstrapDialog, BootstrapDialogTitle } from '../bootstrapFunctions';

export default function ModalCreateAd() {
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
        Open Create Ad Modal
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Criar anúncio
        </BootstrapDialogTitle>

        <DivContent>
            <Typography className='title1' gutterBottom>Tipo de anúncio</Typography>
            <DivButtonCenter>
                <BootstrapButton id='primary' onClick={handleClose} variant="contained" disableRipple>
                    Venda
                </BootstrapButton>
                <BootstrapButton id='secondary' onClick={handleClose} variant="contained" disableRipple>
                    Leilão
                </BootstrapButton>
            </DivButtonCenter>


            <Typography className='title1' gutterBottom>Informações do veículo</Typography>
            <Typography className='title2' gutterBottom>Título</Typography>
            <TextField className='textField' placeholder='ex: Mercedes Benz A200'/>


            <div className='info'>
                <div className='divisors'>
                    <Typography className='title2' gutterBottom>Ano</Typography>
                    <TextField placeholder='2018'/>
                </div>
                <div className='divisors'>
                    <Typography className='title2' gutterBottom>Quilometragem</Typography>
                    <TextField placeholder='0'/>
                </div>
                <div className='divisors' id='price'>
                    <Typography className='title2' gutterBottom>Preço</Typography>
                    <TextField className='textField' placeholder='50.000,00'/>
                </div>
            </div>
            
            <Typography className='title2' gutterBottom>Descrição</Typography>
            <TextField className='textField' placeholder='ex: Mercedes Benz A200ex: Mercedes Benz A200ex: Mercedes Benz A200ex: Mercedes Benz A200 '/>

            <Typography className='title2' gutterBottom>Tipo de veículo</Typography>
            <DivButtonCenter>
                <BootstrapButton id='primary' onClick={handleClose} variant="contained" disableRipple>
                    Carro
                </BootstrapButton>
                <BootstrapButton id='secondary' onClick={handleClose} variant="contained" disableRipple>
                    Moto
                </BootstrapButton>
            </DivButtonCenter>

                <Typography className='title1' gutterBottom>Imagem da capa</Typography>
                <TextField className='textField' placeholder='https://image.com'/>
                <Typography className='title2' gutterBottom>1ª Imagem da galeria</Typography>
                <TextField className='textField' placeholder='https://image.com'/>
                <Typography className='title2' gutterBottom>2ª Imagem da galeria</Typography>
                <TextField className='textField' placeholder='https://image.com'/>

                <button className='button'>Adicionar campo para imagem da galeria</button>

        </DivContent>

        <DivButton>
            <BootstrapButton id='tertiary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Cancelar
            </BootstrapButton>
            <BootstrapButton id='primary' className='btn' onClick={handleClose} variant="contained" disableRipple>
                Criar anúncio
            </BootstrapButton>
        </DivButton>
      </BootstrapDialog>
    </div>
  );
}
