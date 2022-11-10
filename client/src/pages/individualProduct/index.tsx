import { Box } from "@mui/system";
import Header from "../../components/header";
import car from "../../assets/car.png";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { ButtonStyle } from "../../components/button";
import { CommentCard } from "../../components/comments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services";

// apenas para exemplificar resposta apix
const apix = {
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

interface IUser {
  id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  cpf: string;
  birthdate: Date;
  is_admin: boolean;
}

interface IGallery {
  id: string;
  photo: string;
  vehicle_id: string;
}

interface IComment {
  id: string;
  is_active: boolean;
  comment_text: string;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  vehicle_id: string;
  user: IUser;
}

interface IParams {
  vehicleId: string;
}

interface IVehicle {
  id: string;
  photo: string;
  description: string;
  year: number;
  price: number;
  name: string;
  km: number;
  createdAt: Date;
  updatedAt: Date;
  is_active: Boolean;
  user_id: string;
  user: IUser;
  gallery: IGallery[];
  comments: IComment[];
}

export const IndProd = () => {
  const widthCard = { xs: "300px", sm: "440px", md: "440px", lg: "752px" };
  let { vehicleId } = useParams<IParams>();

  const [vehicle, setVehicle] = useState<IVehicle>();

  useEffect(() => {
    api
      .get(`vehicle/${vehicleId}`)
      .then((res) => setVehicle(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          flexWrap: { md: "wrap", lg: "wrap" },
          maxHeight: { md: "3300px", lg: "1878px" },
          pb: "25px",
        }}
      >
        <Box
          sx={{
            height: "355px",
            width: widthCard,
            backgroundColor: "#FDFDFD",
            mt: "30px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: "1",
          }}
        >
          <Box
            sx={{
              width: "441px",
            }}
          >
            <img src={vehicle?.photo} alt="car" height="100%" width="100%" />
          </Box>
        </Box>
        <Box
          sx={{
            height: "240px",
            width: widthCard,
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
            order: "2",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Lexent, sans-serif",
            }}
          >
            {vehicle?.name}
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
                  {vehicle?.year}
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#EDEAFD",
                  minWidth: "51px",
                  height: "32px",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "0px 5px",
                }}
              >
                <Typography
                  sx={{
                    color: "#4529E6",
                    fontSize: "14px",
                    fontFamily: "Inter",
                  }}
                >
                  {vehicle?.km} KM
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
              {vehicle?.price.toLocaleString("pt-BR", {
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
            width: widthCard,
            height: { md: "300px", lg: "213px" },
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
            order: "3",
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
            {vehicle?.description}
          </Typography>
        </Box>
        <Box
          sx={{
            width: widthCard,
            minHeight: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "36px 44px",
            backgroundColor: "#FDFDFD",
            boxSizing: "border-box",
            mt: "30px",
            borderRadius: "4px",
            order: "6",
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
              comments.map((com, index) => (
                <CommentCard
                  key={index}
                  first_name={com.first_name}
                  last_name={com.last_name}
                  comment_text={com.comment_text}
                />
              ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: widthCard,
            minHeight: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "36px 44px",
            backgroundColor: "#FDFDFD",
            boxSizing: "border-box",
            mt: "30px",
            borderRadius: "4px",
            order: "7",
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
              {`${vehicle?.user.first_name.substring(
                0,
                1
              )}${vehicle?.user.last_name.substring(0, 1)}`}{" "}
            </Avatar>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "Inter",
                color: "#212529",
              }}
            >{`${vehicle?.user.first_name} ${vehicle?.user.last_name} USER FROM AUTH`}</Typography>
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
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    },
                  }}
                >
                  <ButtonStyle>Comentar</ButtonStyle>
                </Box>
              ),
            }}
          />
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <ButtonStyle>Comentar</ButtonStyle>
          </Box>

          <Box
            sx={{
              mt: "15px",
              display: "flex",
              flexWrap: "wrap",
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
                  fontSize: { xs: "11px", sm: "12px" },
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
            width: { xs: "300px", sm: "440px" },
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
            order: { xs: "3", sm: "3", md: "3", lg: "8", xl: "8" },
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
            {vehicle?.gallery && (
              <Box>
                <Box
                  sx={{
                    width: { xs: "90px", md: "108px" },
                    heigh: { xs: "90px", md: "108px" },
                    backgroundColor: "#E9ECEF",
                    display: "flex",
                    alignItems: "center",
                    mt: "10px",
                  }}
                >
                  <img src={vehicle.photo} alt="photo_car" width="100%" />
                </Box>
                {vehicle?.gallery.map((gallery, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "90px", md: "108px" },
                      heigh: { xs: "90px", md: "108px" },
                      backgroundColor: "#E9ECEF",
                      display: "flex",
                      alignItems: "center",
                      mt: "10px",
                    }}
                  >
                    <img src={gallery.photo} alt="photo_car" width="100%" />
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "300px", sm: "440px" },
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
            order: { xs: "4", sm: "4", md: "4", lg: "9", xl: "9" },
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
            {`${vehicle?.user.first_name.substring(
              0,
              1
            )}${vehicle?.user.last_name.substring(0, 1)}`}
          </Avatar>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              fontFamily: "Lexent, sans-serif",
              color: "#212529",
            }}
          >{`${vehicle?.user.first_name} ${vehicle?.user.last_name}`}</Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "16px",
              color: "#495057",
              textAlign: "center",
            }}
          >
            Vendedor
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
