import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoProfilePicture,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", md: "350px" },
          borderRadius: 0,
          boxShadow: "none",
        }}
      >
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <CardMedia
            image={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            sx={{ width: 350, height: 180 }}
          />
        </Link>
        <CardContent
          sx={{
            backgroundColor: "#1e1e1e",
            height: "90px",
          }}
        >
          <Link
            to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {video.snippet.title.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              video.id.channelId
                ? `/channel/${video.id.channelId}`
                : demoVideoUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {video.snippet.channelTitle}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
