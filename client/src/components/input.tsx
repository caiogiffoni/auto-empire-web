import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

interface InputProps {
  label: string
  placeholder?: string
  name: string
//   register: any
  isErrored?: boolean
}

export const Input = ({placeholder, label, name}: InputProps) => {
  return (
    <>
        <TextField placeholder={placeholder && placeholder} label={label} variant="outlined" />
    </>
  )
}
