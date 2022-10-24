import { Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import image from "../../assets/car.png";

// apenas para exemplificar resposta api
const api = {
  title:
    "Product title stays here - max 1 line Product title stays here - maximum1 line",
  image,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  firstName: "Samuel",
  lastName: "Leão",
  km: 0,
  year: 2019,
  price: 13585.85,
};

export const CardAuto = () => {
  return (
    <Box
      sx={{
        width: "312px",
        m: "10px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#E9ECEF",
          width: "100%",
          height: "152px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={api.image} alt="car" />
      </Box>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: "Lexent, sans-serif",
          mt: "15px",
        }}
      >
        {api.title.substring(0, 41)}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          lineHeight: "24px",
          fontFamily: "Inter",
          color: "#495057",
          mt: "10px",
        }}
      >
        {`${api.description.substring(0, 80)} ...`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: "14px",
        }}
      >
        <Avatar alt="Samuel Leão" sx={{ bgcolor: "#4529E6" }}>
          SL
        </Avatar>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "24px",
            fontFamily: "Inter",
            fontWeight: "500",
            color: "#495057",
            ml: "12px",
          }}
        >
          {`${api.firstName} ${api.lastName}`}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#EDEAFD",
              width: "51px",
              height: "32px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "#4529E6", fontSize: "14px", fontFamily: "Inter" }}
            >
              {api.km} KM
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#EDEAFD",
              width: "51px",
              height: "32px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "#4529E6", fontSize: "14px", fontFamily: "Inter" }}
            >
              {api.year}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: "Lexent, sans-serif",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {api.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </Box>
    </Box>
  );
};
