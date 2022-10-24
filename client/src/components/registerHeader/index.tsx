import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { ButtonStyle } from "../button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MotorShop from "../../assets/MotorsShop.png";
import Line from "../../assets/Line.png";
import { UserMenu } from "./style";

const pages = ["Carros", "Motos", "Leilão"];
const settings = ["Editar Perfil", "Editar endereço", "Minhas Compras", "Sair"];

const RegisterHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        background: "#FDFDFD",
        justifyContent: "space-between",
      }}
    >
      <Container
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          margin: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          <img src={MotorShop} alt="logo" />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                justifyContent: "right",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "44px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      <img src={Line} alt="line" style={{ margin: "none" }} />
      <UserMenu>
        <Container sx={{ width: "100%" }}>
          <Toolbar sx={{ width: "100%" }}>
            <Box
              sx={{
                flexGrow: 0,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                gap: "35px",
              }}
            >
              <ButtonStyle
                variant="text"
                textColor="#4529E6"
                width="119px"
                whiteSpace="noWrap"
              >
                Fazer Login
              </ButtonStyle>
              <ButtonStyle
                variant="text"
                backgroundColor="transparent"
                textColor="#0B0D0D"
                width="119px"
                borderColor="#ADB5BD"
              >
                Cadastrar
              </ButtonStyle>
            </Box>
          </Toolbar>
        </Container>
      </UserMenu>
    </AppBar>
  );
};
export default RegisterHeader;

//backgroundColor: "#4529E6"
