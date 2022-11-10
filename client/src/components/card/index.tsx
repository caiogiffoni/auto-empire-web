import { Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../services";


export const CardAuto = (item: any) => {
    const [user, setUser] = useState([])

    const displayUsers = useCallback( () => {
        api.get(`/users`)
        .then((response) => setUser(response.data))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        displayUsers()
    }, [])

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
        <img src={item.item.photo} alt="car" width={257} />
      </Box>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: "Lexent, sans-serif",
          mt: "15px",
        }}
      >
        {item.item.title}
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
        {`${item.item.description} ...`}
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
          {}
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
          {user.map((profile: any) => {
            if (profile.id === item.item.user_id) {
                return profile.first_name + ' ' + profile.last_name
            } 

            return ''
          })}
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
              width: "80px",
              height: "32px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ color: "#4529E6", fontSize: "12px", fontFamily: "Inter", textAlign: "center"}}
            >
              {item.item.km} KM
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
              sx={{ color: "#4529E6", fontSize: "12px", fontFamily: "Inter" }}
            >
              {item.item.years}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: "Lexent, sans-serif",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {item.item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Typography>
      </Box>
    </Box>
  );
};
