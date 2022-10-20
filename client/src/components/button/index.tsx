import Button from "@mui/material/Button";

interface IButton {
  children: string;
  width?: string;
  variant?: "contained" | "text" | "outlined" | undefined;
}

export const ButtonStyle = ({
  children,
  width = "38px",
  variant = "contained",
}: IButton) => {
  return (
    <Button
      variant={variant}
      sx={{
        backgroundColor: variant === "contained" ? "#4529E6" : "",
        border: variant === "contained" ? "" : "1px solid white",
        color: variant === "contained" ? "" : "white",
        width: width,
        height: "38px",
        padding: "12px, 20px, 12px, 20px",
        textTransform: "none",
      }}
    >
      {children}
    </Button>
  );
};
