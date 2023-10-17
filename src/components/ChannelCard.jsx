import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material";

/* import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
} from "../utils/constants"; */

const ChannelCard = ({ channel }) => {
  return (
    <>
      <Card
        sx={{
          boxSizing: "border-box",
          width: { xs: "100%", md: "350px" },
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Link
          to={/*  channel.id.channelId ?  */ `channel/${channel.id.channelId}`}
        >
          <CardMedia
            image={channel.snippet.thumbnails.high.url}
            alt={channel.snippet.title}
            sx={{ width: 280, height: 280, borderRadius: "50%" }}
          />
        </Link>
        <CardContent
          sx={{
            boxSizing: "border-box",
            height: "30px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Link to={`channel/${channel.id.channelId}`}>
            <Typography variant="subtitle2" fontWeight="bold" color="#fff" sx={{ textDecoration: 'none', }}>
              {channel.snippet.title.slice(0, 60)}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default ChannelCard;
