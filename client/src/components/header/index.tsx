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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MotorShop from "../../assets/MotorsShop.png";
import Line from "../../assets/Line.png";

const pages = ["Carros", "Motos", "Leilão"];
const settings = ["Editar Perfil", "Editar endereço", "Minhas Compras", "Sair"];

const Header = () => {
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

      <Container sx={{ width: "30%", display: { xs: "none", md: "flex" } }}>
        <Toolbar sx={{ width: "100%" }}>
          <Box
            sx={{
              flexGrow: 0,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, marginRight: "8px" }}
              >
                <Avatar
                  alt="Iemy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{ backgroundColor: "#4529E6" }}
                />
              </IconButton>
            </Tooltip>
            <span
              style={{
                color: "black",
                display: "flex",
                textAlign: "start",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "28px",
              }}
            >
              Username
            </span>
            <Menu
              elevation={0}
              className="menu"
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;