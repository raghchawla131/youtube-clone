import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { demoChannelUrl } from "../utils/constants";

/* import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
} from "../utils/constants"; */

const ChannelCard = ({ channel, marginTop, subscriberCount }) => {
  if(!channel) {
    return null;
  }
  return (
    <>
      <Card
        sx={{
          boxSizing: "border-box",
          width: { xs: "356px", md: "350px" },
          height: "326px",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          backgroundColor: "transparent",
          marginTop,
        }}
      >
        <Link to={`/channel/${channel.id.channelId}`}>
          <CardMedia
            image={channel.snippet.thumbnails.high.url}
            alt={channel.snippet.title}
            sx={{ width: 200, height: 200, borderRadius: "50%" }}
          />
        </Link>
        <CardContent
          sx={{
            boxSizing: "border-box",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Link to={`/channel/${channel.id.channelId}`}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#fff"
              sx={{ textDecoration: "none" }}
            >
              {channel.snippet.title.slice(0, 60)}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="#fff"
              sx={{ textDecoration: "none" }}
            >
              {subscriberCount}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default ChannelCard;
