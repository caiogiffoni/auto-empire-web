import * as React from 'react';
import Button from '@mui/material/Button';
import { BootstrapDialog, BootstrapDialogTitle } from '../bootstrapFunctions';
import { DialogContent } from '@mui/material';

export default function ModalImage() {
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
        Open Image Modal
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Imagem do veículo
        </BootstrapDialogTitle>
        <DialogContent>
            <img width='350px' src={'https://s2.glbimg.com/bS0C9x8vNjm95NEGh4xxW-ZGp44=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/e/9/b7AvAHSfiItLIivXkkRw/2019-03-12-201098-xc90-t8-r-design.jpg'} alt="carro"/>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
