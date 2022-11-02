import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IComment {
  first_name: string;
  last_name: string;
  comment_text: string;
}

export const CommentCard = ({
  first_name,
  last_name,
  comment_text,
  ...rest
}: IComment) => {
  return (
    <>
      <Box
        sx={{
          mt: "25px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Avatar>
          {first_name.substring(0, 1) + last_name.substring(0, 1)}
        </Avatar>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Inter",
            color: "#212529",
          }}
        >{`${first_name} ${last_name}`}</Typography>
        <p>colocar aqui o tempo moment npm</p>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          fontFamily: "Inter",
          color: "#212529",
          mt: "12px",
        }}
      >
        {comment_text}
      </Typography>
    </>
  );
};
