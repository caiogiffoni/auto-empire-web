import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { UserContext } from "../../Providers/Users";
import { useEffect, useState, useContext } from "react";

export default function UserInfos() {
  const { user, listUser } = useContext(UserContext);
  const [firstLetter, setfirstLetter] = useState("");
  useEffect(() => {
    listUser();
  }, []);

  useEffect(() => {
    if (user.length > 0) {
      setfirstLetter(user[0].username[0]);
    }
  }, [user]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: 277,
          background: "#4529E6",
        }}
      ></div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          marginTop: "-180px",
        }}
      >
        {user.length > 0 ? (
          <Card
            sx={{
              maxWidth: "1240px",
              width: "1240px",
              height: 416,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fffcfc",
              padding: "41px",
            }}
          >
            <div>
              <Avatar
                sx={{
                  background: "#4529E6",
                  maxWidth: 104,
                  width: 104,
                  height: 104,
                  fontSize: 44,
                }}
                aria-label="recipe"
              >
                {firstLetter}
              </Avatar>
              <div style={{ gap: "4px" }}>
                <span
                  style={{
                    width: 104,
                    textAlign: "center",
                    marginRight: "9px",
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  {user[0].username}
                </span>
                <button
                  style={{
                    background: "#EDEAFD",
                    border: "none",
                    color: "#4529E6",
                    fontSize: "14px",
                    fontWeight: 500,
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}
                >
                  {user[0].is_admin === true ? (
                    <span>Anunciante</span>
                  ) : (
                    <span></span>
                  )}
                </button>
              </div>
            </div>

            <CardContent>
              <Typography color="text.secondary">
                {user[0].email} 
              </Typography>
            </CardContent>
            <Button
              style={{
                width: "144px",
                color: "#4529E6",
                border: "#4529E6 solid  1px",
              }}
              variant="outlined"
            >
              Criar anuncio
            </Button>
          </Card>
        ) : (
          <div>Carregando</div>
        )}
      </div>
    </>
  );
}
