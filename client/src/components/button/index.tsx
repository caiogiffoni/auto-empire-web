import Button from "@mui/material/Button";

interface IButton {
  children: string;
  width?: string;
  variant?: "contained" | "text" | "outlined" | undefined;
  textColor?: string;
  borderColor?: string;
}

/* 
OS TIPOS DE BOTÕES:
      <Box
        sx={{
          backgroundColor: "#5126EA",
          p: "10px",
        }}
      >
        <ButtonStyle width="160px" variant="outlined">
          Leilão
        </ButtonStyle>
      </Box>
      <br />
      <br />
      <ButtonStyle>Comprar</ButtonStyle>
      <br />
      <br />
      <ButtonStyle width="268px">Entrar</ButtonStyle>
      <br />
      <br />
      <ButtonStyle
        width="268px"
        variant="outlined"
        textColor="black"
        borderColor="#bbbbbb"
      >
        Cadastrar
      </ButtonStyle>
*/

export const ButtonStyle = ({
  children,
  width = "100px",
  variant = "contained",
  textColor = "white",
  borderColor = "white",
}: IButton) => {
  return (
    <Button
      variant={variant}
      sx={{
        backgroundColor: variant === "contained" ? "#4529E6" : "",
        border: variant === "contained" ? "" : `1px solid ${borderColor}`,
        color: textColor,
        width: width,
        height: "38px",
        padding: "12px, 20px, 12px, 20px",
        fontFamily: "Inter",
        textTransform: "none",
      }}
    >
      {children}
    </Button>
  );
};
