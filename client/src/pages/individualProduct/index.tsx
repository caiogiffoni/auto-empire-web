import { Box } from "@mui/system";
import Header from "../../components/header";
import car from "../../assets/car.png";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { ButtonStyle } from "../../components/button";
import { CommentCard } from "../../components/comments";

// apenas para exemplificar resposta api
const api = {
  title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
  car,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  firstName: "Samuel",
  lastName: "Leão",
  km: 0,
  year: 2013,
  price: 13585.85,
  photos: [car, car, car, car, car, car],
};

const comments = [
  {
    first_name: "Julia",
    last_name: "Lima",
    comment_text:
      "Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industrys standard  ummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    first_name: "Marcos",
    last_name: "Antonio",
    comment_text:
      "Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industrys standard  ummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    first_name: "Camila",
    last_name: "Silva",
    comment_text:
      "Lorem Ipsum is simply dummy text of the printing and ypesetting industry. Lorem Ipsum has been the industrys standard  ummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const user = {
  first_name: "Samuel",
  last_name: "Leão",
};

export const IndProd = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <Box
        sx={{
          background:
            "linear-gradient(rgb(69, 41, 230) 0% ,rgb(69, 41, 230) 500px,rgb(241, 243, 245) 500px,rgb(241, 243, 245) 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          maxHeight: "1878px",
        }}
      >
        <Box
          sx={{
            height: "355px",
            width: "752px",
            backgroundColor: "#FDFDFD",
            mt: "30px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={api.car} alt="car" height="253px" width="441px" />
        </Box>
        <Box
          sx={{
            height: "240px",
            width: "752px",
            backgroundColor: "#FDFDFD",
            mt: "30px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "8px",
            p: "44px 44px",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Lexent, sans-serif",
            }}
          >
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexGrow: "1",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", gap: "8px" }}>
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
                  sx={{
                    color: "#4529E6",
                    fontSize: "14px",
                    fontFamily: "Inter",
                  }}
                >
                  {api.year}
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
                  sx={{
                    color: "#4529E6",
                    fontSize: "14px",
                    fontFamily: "Inter",
                  }}
                >
                  {api.km} KM
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
          <Box sx={{ mt: "5px" }}>
            <ButtonStyle>Comprar</ButtonStyle>
          </Box>
        </Box>
        <Box
          sx={{
            width: "751px",
            height: "213px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "36px 44px",
            gap: "32px",
            backgroundColor: "#FDFDFD",
            boxSizing: "border-box",
            mt: "30px",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "Lexent, sans-serif",
              mt: "15px",
            }}
          >
            Descrição
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Inter",
              color: "#495057",
            }}
          >
            {api.description}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "751px",
            minHeight: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "36px 44px",
            backgroundColor: "#FDFDFD",
            boxSizing: "border-box",
            mt: "30px",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "Lexent, sans-serif",
              mt: "15px",
            }}
          >
            Comentários
          </Typography>
          <Box>
            {comments &&
              comments.map((com) => (
                <CommentCard
                  first_name={com.first_name}
                  last_name={com.last_name}
                  comment_text={com.comment_text}
                />
              ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "751px",
            minHeight: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "36px 44px",
            backgroundColor: "#FDFDFD",
            boxSizing: "border-box",
            mt: "30px",
            borderRadius: "4px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Avatar>
              {user.first_name.substring(0, 1) + user.last_name.substring(0, 1)}
            </Avatar>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Inter",
                color: "#212529",
              }}
            >{`${user.first_name} ${user.last_name}`}</Typography>
          </Box>
          <TextField
            id="outlined-textarea"
            label="Adicione aqui seu comentário"
            multiline
            rows={4}
            sx={{
              m: "20px 0px",
            }}
            InputProps={{
              endAdornment: (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flenx-end",
                    flexGrow: "1",
                  }}
                >
                  <ButtonStyle>Comentar</ButtonStyle>
                </Box>
              ),
            }}
          />
          <Box
            sx={{
              mt: "15px",
              display: "flex",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 12px",
                gap: "10px",
                width: "80px",
                height: "24px",
                backgroundColor: "#E9ECEF",
                borderRadius: "24px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#868E96",
                }}
              >
                Gostei muito!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 12px",
                gap: "10px",
                width: "60px",
                height: "24px",
                backgroundColor: "#E9ECEF",
                borderRadius: "24px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#868E96",
                }}
              >
                Incrível
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 12px",
                gap: "10px",
                width: "200px",
                height: "24px",
                backgroundColor: "#E9ECEF",
                borderRadius: "24px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#868E96",
                }}
              >
                Recomendarei para meus amigos!
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "440px",
            height: "377px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "36px 44px",
            backgroundColor: "#FDFDFD",
            boxSizing: "border-box",
            mt: "30px",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "Lexent, sans-serif",
              mt: "15px",
            }}
          >
            Fotos
          </Typography>
          <Box
            sx={{
              flexGrow: "1",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              borderRadius: "4px",
            }}
          >
            {api.photos &&
              api.photos.map((photo) => (
                <Box
                  sx={{
                    width: "108px",
                    heigh: "108px",
                    backgroundColor: "#E9ECEF",
                    display: "flex",
                    alignItems: "center",
                    mt: "10px",
                  }}
                >
                  <img src={photo} alt="photo_car" width="100%" />
                </Box>
              ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "440px",
            height: "426px",
            backgroundColor: "#FDFDFD",
            borderRadius: "4px",
            mt: "34px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            p: "20px 44px",
            boxSizing: "border-box",
          }}
        >
          <Avatar
            sx={{
              width: "104px",
              height: "104px",
              fontSize: "36px",
              backgroundColor: "#4529E6",
            }}
          >
            {user.first_name.substring(0, 1) + user.last_name.substring(0, 1)}
          </Avatar>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "Lexent, sans-serif",
              color: "#212529",
            }}
          >{`${user.first_name} ${user.last_name}`}</Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "16px",
              color: "#495057",
              textAlign: "center",
            }}
          >
            {api.description}
          </Typography>
          <Button
            sx={{
              backgroundColor: "#0B0D0D",
              width: "206px",
              fontFamily: "Inter",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Ver todos anuncios
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
