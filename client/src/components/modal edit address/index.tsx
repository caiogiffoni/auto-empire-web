import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import { red, grey } from '@mui/material/colors';
import { TextField } from '@mui/material';
import { DivButton, DivContent, Container } from './styles';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  }
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

// const GreyColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText(grey[500]),
//     backgroundColor: grey[500],
//     '&:hover': {
//       backgroundColor: grey[700],
//     },
//   }));

//   const RedColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText(red[500]),
//     backgroundColor: red[500],
//     '&:hover': {
//       backgroundColor: red[700],
//     },
//   }));
  

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

        <DivContent dividers>

            <Typography gutterBottom>Informações de endereço</Typography>
            <Typography className='title' gutterBottom>CEP</Typography>
            <TextField className='textField' placeholder='89888.888'/>


            <div className='info'>
                <div className='divisors'>
                    <Typography className='title' gutterBottom>Estado</Typography>
                    <TextField placeholder='Paraná'/>
                </div>
                <div className='divisors'>
                    <Typography className='title' gutterBottom>Cidade</Typography>
                    <TextField placeholder='Curitiba'/>
                </div>
            </div>

            <Typography className='title' gutterBottom>Rua</Typography>
            <TextField className='textField' placeholder='Rua do paraná'/>

            <div className='info'>
                <div className='divisors'>
                    <Typography className='title' gutterBottom>Número</Typography>
                    <TextField placeholder='1029'/>
                </div>
                <div className='divisors'>
                    <Typography className='title' gutterBottom>Complemento</Typography>
                    <TextField placeholder='Apart 12'/>
                </div>
            </div>

        </DivContent>

        <DivButton>
            <BootstrapButton className='btn' onClick={handleClose} variant="contained" disableRipple>
                Excluir anúncio
            </BootstrapButton>
            <BootstrapButton className='btn' onClick={handleClose} variant="contained" disableRipple>
                Salvar alterações
            </BootstrapButton>
        </DivButton>
      </BootstrapDialog>
    </div>
  );
}
